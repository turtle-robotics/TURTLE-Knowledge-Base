TURTLE Knowledge Base
=======================================

This repository contains the source code for the TURTLE Knowledge Base documentation, which is built using Sphinx and hosted on Read the Docs.

Local Development
-----------------

Follow these steps to get a local preview running:

1. Create a Python virtual environment and activate it::

      python3 -m venv .venv
      source .venv/bin/activate

2. Install the documentation dependencies::

      pip install -r docs/requirements.txt

3. Start the live preview server::

      sphinx-autobuild docs/source docs/build/html

Sphinx Autobuild will watch for file changes and serve the documentation at ``http://127.0.0.1:8000``. Press ``Ctrl+C`` to stop the server, and re-run ``source .venv/bin/activate`` when opening a new terminal.
