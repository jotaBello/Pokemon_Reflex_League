import reflex as rx

config = rx.Config(
    app_name="Pokemon_Reflex_League",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)