# Contributing

Thank you for helping with the TURTLE Knowledge Base. This page explains how to report documentation work and submit changes.

## Report documentation work

Use [GitHub Issues](https://github.com/turtle-robotics/TURTLE-Knowledge-Base/issues/new/choose) for documentation work:

- **New Knowledge Base Content**: request a new page or topic.
- **Improve Existing Content**: suggest a change to an existing page.
- **Documentation Problem**: report incorrect, broken, or missing documentation.

Select the form that matches your request. Then complete the required fields.

## Work on an issue

1. Comment on the issue to claim it.
2. Prepare your copy of the repository:
   - If you have write access, create a branch from `main`.
   - If you do not have write access, fork the repository and create a branch from your fork's `main` branch.
3. Use a branch name in this format: `<type>/<short-description>`. For example, `docs/add-battery-guide`.
4. Make the documentation changes.
5. Build the documentation on your computer. See [Local Development](README.md#local-development).
6. Push the branch to the TURTLE repository or to your fork.
7. Open a pull request against `turtle-robotics/TURTLE-Knowledge-Base:main`.
8. Put `Closes #<issue-number>` in the pull request description to link the issue.
9. Use a Conventional Commits pull request title. For example, `docs: add battery guide`.

A maintainer reviews the pull request and merges it.

## Keep a fork up to date

If you use a fork, add the TURTLE repository as the `upstream` remote:

```bash
git remote add upstream https://github.com/turtle-robotics/TURTLE-Knowledge-Base.git
```

Before you create a new branch, update your local `main` branch:

```bash
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
```

Then create your branch from the updated `main` branch.

## Build the documentation

See [Local Development](README.md#local-development) in the README for the full setup.

For a one-time build that matches the CI check, run:

```bash
sphinx-build -b html docs/source docs/build/html
```

## Documentation structure

Source documentation is in `docs/source/`.

Each topic has a folder, for example `Electronics_and_Power`. Sphinx builds the navigation from `toctree` lists in `docs/source/index.rst`.

Add each new page to the correct `toctree`. If you do not add the page, it does not appear in the navigation.

Store images and other files in `docs/source/static/`.
