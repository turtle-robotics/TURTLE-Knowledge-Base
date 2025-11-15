# TURTLE Knowledge Base

This repository contains the source code for the TURTLE Knowledge Base documentation, which is built using Sphinx and hosted on Read the Docs.

This site is live on [the turtle github site](https://turtle-robotics.github.io/TURTLE-Knowledge-Base/)

Or through [the A&M tx.ag tinyurl](https://tx.ag/TURTLEdocs)

This initiative was started by Ian [1] Lansdowne, continued by Ian [2] Wilhite and Ryo Kato, and is currently open to additional contributors. Please reach out to <meen-turtle@tamu.edu> for formal collaborations.

## Repository Structure

- `docs/` contains the Sphinx project, with `source/` holding every `.rst` article organized by topic (Electronics_and_Power, Mechanical_and_Design, Project_Management, etc.).
- `docs/requirements.txt` lists the packages required to build the docs locally. You should not need to change this.
- `Makefile`/`make.bat` provide the standard Sphinx build targets (e.g., `make html`), while `_build/` and `build/` store generated artifacts. 

## Local Development

Use the following steps to preview the docs locally:

1. Create and activate a virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
2. Install the documentation dependencies:
   ```bash
   pip install -r docs/requirements.txt
   ```
3. Start the live server:
   ```bash
   sphinx-autobuild docs/source docs/build/html
   ```

Sphinx Autobuild will watch for edits and serve the site at `http://127.0.0.1:8000`. Use `Ctrl+C` to stop the server and rerun `source .venv/bin/activate` whenever you open a new terminal session.
