import reflex as rx
from Pokemon_Reflex_League.components.setup_heading import setup_heading
from Pokemon_Reflex_League.components.add_team_button import add_team_button

class Trainer(rx.Base):
    name:str
    region:str
    gender:str

class State(rx.State):
    trainer_list:list[Trainer]=[]

    def add_trainer(self,trainer:dict):
        self.trainer_list.append(Trainer(**trainer))

def add_trainer_button():
    return rx.dialog.root(
        rx.dialog.trigger(
            rx.button(
                rx.icon('plus',size=26),
                rx.text("Add Trainer",size='4')
            )
        ),
        rx.dialog.content(
            rx.dialog.title("Add New Trainer"),
            rx.dialog.description("Fill the form with the trainer's info"),
            rx.form(
                rx.flex(
                    rx.input(
                        placeholder="Trainer Name",
                        name="name",
                        required=True,
                    ),
                    rx.input(
                        placeholder="Trainer Region",
                        name="region",
                    ),
                    rx.select(
                        ["Male", "Female"],
                        placeholder="Gender",
                        name="gender",
                    ),
                    rx.flex(
                    rx.dialog.close(
                        rx.button(
                            "Cancel",
                            variant="soft",
                            color_scheme="gray",
                        ),
                    ),
                    rx.dialog.close(
                        rx.button(
                            "Submit", type="submit"
                        ),
                    ),
                    spacing="3",
                    justify="end",
                ),
                direction="column",
                spacing="4",
                ),
                on_submit=State.add_trainer,
                reset_on_submit=False,
            ),
        max_width="450px",
        ),
    )


def trainers_table():
    return rx.table.root(
        rx.table.header(
            rx.table.row(
                rx.table.column_header_cell("Name"),
                rx.table.column_header_cell("Region"),
                rx.table.column_header_cell("Gender"),
                rx.table.column_header_cell("Team")
            )
        ),
        rx.table.body(
            rx.foreach(State.trainer_list,show_trainer)
        ),
        variant="surface",
        size="3",
        width="75%",
    )

def show_trainer(trainer:Trainer):
    return rx.table.row(
        rx.table.cell(trainer.name),
        rx.table.cell(trainer.region),
        rx.table.cell(trainer.gender),
        rx.table.cell(add_team_button()),
        style={"_hover": {"bg": rx.color("gray", 3)}},
        align="center",
    )


def setup() ->rx.Component:
    return rx.container(
        rx.vstack(
            rx.color_mode.button(position="top-right"),
            setup_heading(),
            add_trainer_button(),
            trainers_table(),
            width="100%",
        )
    )