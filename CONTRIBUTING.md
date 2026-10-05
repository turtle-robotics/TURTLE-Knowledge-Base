# Contributing

Thank you for helping with the TURTLE Knowledge Base. This page explains how to report documentation work and how to submit changes.

## Report documentation work

Use [GitHub Issues](https://github.com/turtle-robotics/TURTLE-Knowledge-Base/issues/new/choose) for all documentation work:

- **New Knowledge Base Content**: request a new page or topic.
- **Improve Existing Content**: suggest a change to an existing page.
- **Documentation Problem**: report incorrect, broken, or missing documentation.

Pick the form that matches your request. Then fill in the fields.

## Work on an issue

1. Comment on the issue to claim it.
2. Create a branch from the default branch (`main`).
3. Make the documentation changes.
4. Build the documentation on your computer. See [Local Development](README.md#local-development).
5. Open a pull request. Put `Closes #<issue-number>` in the description to link the issue.
6. Use a Conventional Commits pull request title. For example: `docs: add a battery guide`.

A maintainer reviews the pull request and merges it.

## Build the documentation

See [Local Development](README.md#local-development) in the README for the full setup. For a one-time build that matches the CI check, run:

```bash
sphinx-build -b html docs/source docs/build/html
```

## Documentation structure

Source documentation lives in `docs/source/`. Each topic has a folder (for example, `Electronics_and_Power`). Sphinx builds the navigation from `toctree` lists in `docs/source/index.rst`. Add each new page to the `toctree` of its topic. If you skip this step, the page does not appear in the navigation. Store images and other files in `docs/source/static/`.
