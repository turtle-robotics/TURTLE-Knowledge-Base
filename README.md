# TURTLE Knowledge Base

This repository contains the source code for the TURTLE Knowledge Base documentation. A GitHub Actions workflow builds the site with Sphinx and publishes it on GitHub Pages.

This site is live on [docs.turtlerobotics.org](https://docs.turtlerobotics.org/)

[Ian Lansdowne](https://github.com/Ian118) started this initiative. [Ian Wilhite](https://github.com/Ian-Wilhite), [Ryo Kato](https://github.com/theryokato), and [Justin Simms](https://github.com/JSim011235) continued it. The project is now open to additional contributors. Please contact <turtlerobotics@gmail.com> for formal collaborations. See the [contributors graph](https://github.com/turtle-robotics/TURTLE-Knowledge-Base/graphs/contributors) for every contributor to this repository.

## Repository Structure

- `docs/` contains the Sphinx project, with `source/` holding every `.rst` article organized by topic (Electronics_and_Power, Mechanical_and_Design, Project_Management, etc.).
- `docs/requirements.txt` lists the packages required to build the docs locally. You should not need to change this.
- `docs/Makefile` and `docs/make.bat` provide the standard Sphinx build targets (for example, `make html` from `docs/`), and generated files go to `docs/build/`.

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the issue and pull request workflow.
