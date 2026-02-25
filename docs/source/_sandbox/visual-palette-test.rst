:orphan:

Visual Palette Test (Sandbox)
=============================

Quick, single-page snapshot of common UI elements to verify the current color palette. Not linked from navigation; access directly at ``/ _sandbox/visual-palette-test.html`` after a build.

Text & Inline Elements
----------------------

Normal paragraph text with a bit of **bold**, *italic*, and ``inline code`` plus an `external link <https://example.com>`_.

Lists
-----

- Unordered item one
- Unordered item two with a nested, numbered list:

  1. First nested step
  2. Second nested step

Code Block
----------

.. code-block:: python

   def greet(name: str) -> str:
       return f"Hello, {name}!"

Tables
------

.. list-table:: Sample Measurements
   :header-rows: 1

   * - Part
     - Length (mm)
     - Notes
   * - Bracket A
     - 42
     - Fits 2020 extrusion
   * - Spacer B
     - 18
     - Nylon

Admonitions
-----------

.. note::

   Note text to check info background and border.
   This text should be in a blue box

.. warning::

   Warning text to check warning background and border.

.. caution::

   Caution text for a softer warning state.

.. danger::

   Danger text for critical alerts.

.. tip::

   Tip text for helpful hints.

Blockquote
----------

::

   "Design is where science and art break even." – Robin Mathew

