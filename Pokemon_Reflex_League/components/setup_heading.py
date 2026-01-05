import reflex as rx

def setup_heading():
    return rx.vstack(
            rx.heading( "SETUP A TOURNAMENT",size="9"),
            spacing="5",
            justify='start',
            min_height="20vh",
        )