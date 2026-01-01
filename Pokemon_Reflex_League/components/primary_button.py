import reflex as rx

def primary_button(text: str, on_click):
    return rx.button(
        text,
        on_click=on_click,
        size="4",
        color="black",
        border_radius="12px",
        padding_x="24px",
        padding_y="12px",
        font_weight="bold",
        _hover={
            "transform": "scale(1.05)",
        },
        transition="all 0.2s ease",
    )