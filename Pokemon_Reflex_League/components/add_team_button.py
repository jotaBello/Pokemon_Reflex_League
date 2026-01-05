import reflex as rx
import httpx

class State(rx.State):
    pokemons:list[dict]=[]
    selected_pokemons = []
    search: str = ""

    def set_search(self, value: str):
        self.search = value

    async def load_pokemons(self):
        async with httpx.AsyncClient() as client:
            response = await client.get(
                "https://pokeapi.co/api/v2/pokemon?limit=1010"
            )
            data = response.json()
        self.pokemons = [
            {
                "id": i + 1,
                "name": p["name"],
                "img": f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{i+1}.png"
            }
            for i, p in enumerate(data["results"])
        ]

    def toggle_pokemon(self,id:int):
        if id in self.selected_pokemons:
            self.selected_pokemons.remove(id)
        else:
            if len(self.selected_pokemons) >= 6:
                return rx.toast.warning("Ya tienes 6 Pokémon seleccionados",duration=1500)
            self.selected_pokemons.append(id)


    @rx.var
    def selected_set(self) -> set[int]:
        return set(self.selected_pokemons)
    

    def filtered_pokemons(self):
        return [
            p for p in self.pokemons 
            if self.search.lower() in p["name"].lower()
        ]
    
def pokemon_selector():
    return



def show_pokemon(pokemon):
    return rx.box(
        rx.text(
            pokemon["id"],
            align='center'
            ),
        rx.image(
            src=pokemon["img"],
            width="128px",
            height="128px",
        ),
        rx.text(
            pokemon["name"],
            font_size="18px",
            align="center",
        ),
        on_click=lambda: State.toggle_pokemon(pokemon["id"]),
        border="2px solid",
        border_color=rx.cond(
        State.selected_set.contains(pokemon["id"]),
        "#00ff08",
        "#ffffff"
        ),
        border_radius="12px",
        padding="2",
        cursor="pointer",
        _hover={"transform": "scale(1.05)"},
    )


def add_team_button():
    return rx.dialog.root(
        rx.dialog.trigger(
            rx.button("Add team",on_click=State.load_pokemons)
        ),
        rx.dialog.content(
            rx.dialog.title("Add your team"),
            rx.dialog.description("Select your pokemons"),
            rx.form(
                rx.flex(
                    rx.input(
                        
                    ),
                    rx.grid(
                        rx.foreach(
                            State.pokemons,
                            show_pokemon
                        ),
                        columns="4",
                        spacing="1"
                    ),
                    direction="column",
                    spacing="4",
                ),
                #on_submit=State.add_team,
                #reset_on_submit=False,
            ),
                rx.flex(
                        rx.dialog.close(
                            rx.button(
                                "Cancel",
                                variant="soft",
                                color_scheme="gray"
                            )
                        ),
                        rx.dialog.close(
                            rx.button(
                                "Submit",
                                type="submit"
                            ),
                        ),
                        spacing="3",
                        justify="end",
                    ),
        )
    )