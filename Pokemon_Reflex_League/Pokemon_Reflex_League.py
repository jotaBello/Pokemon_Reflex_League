import reflex as rx

def heading():
    return rx.vstack(
            rx.heading( "POKEMON REFLEX LEAGUE",size="9"),
            rx.text(
                "Login • Battle • Become Champion",
                font_size="18px",
                color="#555",
            ),
            spacing="5",
            justify='start',
            min_height="20vh",
        )


#class State(rx.State):


def index() -> rx.Component:
    return rx.container(
        rx.color_mode.button(position="top-right"),
        heading(),
        rx.button("Start Tournament"),
        rx.text(
                "Organize Pokémon tournaments with your friends in seconds",
                font_size="14px",
                color="#777",
                margin_top="16px",
            ),
    )


app = rx.App()
app.add_page(index)