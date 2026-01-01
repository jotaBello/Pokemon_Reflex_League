import reflex as rx

def index_heading():
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
