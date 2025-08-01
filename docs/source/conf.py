# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'Knowledge Base'
copyright = '2025, TURTLE Robotics'
author = 'TURTLE Robotics'

release = '0.1'
version = '0.1.0'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'
html_logo = "static/logo.png"
html_favicon = "static/favicon.png"
html_theme_options = {
    'logo_only': False,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': False,
    'vcs_pageview_mode': '',
    'style_nav_header_background': '#500000',
    'flyout_display': 'hidden',
    'version_selector': False,
    'language_selector': False,
}


# -- Options for EPUB output
epub_show_urls = 'footnote'
