import reflex as rx
from .components.primary_button import *
from .components.index_heading import *
from .pages.setup import setup


def index() -> rx.Component:
    return rx.container(
        rx.color_mode.button(position="top-right"),
        index_heading(),
        primary_button(
            "Start Tournament",
            on_click=rx.redirect("/setup")
        ),
        rx.text(
                "Organize Pokémon tournaments with your friends in seconds",
                font_size="14px",
                color="#777",
                margin_top="16px",
            ),
        
        rx.button("Click me",on_click=rx.toast.warning("This is a toast"))
    )



app = rx.App(
    theme=rx.theme(radius="full", accent_color='cyan'),
)
app.add_page(index,route="/",title="Pokemon Reflex League")
app.add_page(setup,route="/setup")