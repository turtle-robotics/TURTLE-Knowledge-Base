3D Printers
===========

Exporting
---------

.. tab-set::

  .. tab-item:: SolidWorks

     1. Open the part or assembly and verify sketches/features are fully resolved.
     2. Choose :menuselection:`File --> Save As` and pick a destination folder in your project workspace.
     3. For an ``.STL`` export:
        - Set ``Save as type`` to ``STL (*.stl)`` and click :guilabel:`Options`.
        - Switch ``Output as`` to ``Binary`` for smaller files and set the unit to match your model.
        - Tighten ``Deviation``/``Angle`` as needed (``0.01 mm`` and ``5°`` work for most prints), then confirm and save.
     4. For a ``.STEP`` export:
        - Repeat the save-as workflow but choose ``STEP AP214 (*.step)``.
        - In :guilabel:`Options`, select ``AP214`` to keep color/layer data when available.
        - Save the file alongside the STL so fabrication and CAD teams share the same revision.

  .. tab-item:: Onshape

     1. Open the Part Studio or Assembly tab containing the geometry you need to fabricate.
     2. Select the part(s) or the assembly in the feature tree, then right-click and choose :menuselection:`Export`.
     3. In the dialog, pick ``STL`` or ``STEP`` under :guilabel:`Format`.
     4. For ``STL``:
        - Choose ``Binary`` encoding, set the units (millimeters for most printers), and select the desired resolution preset (``Fine`` for consumer printers, ``Custom`` for tight tolerances).
        - Enable ``Download`` or ``Send to cloud storage`` depending on your workflow, then click :guilabel:`Export`.
     5. For ``STEP``:
        - Select ``STEP AP214`` for best compatibility and keep the default chord tolerance unless your vendor requests otherwise.
        - Export to your Downloads folder or shared drive; rename the file with the part number/revision before sharing.

        Keeping both formats in the same release folder ensures downstream users can either print directly from the ``.STL`` or modify the geometry using the ``.STEP``.

File formats:

 * ``.sldprt`` and ``.sldasm`` are used by Solidworks to store your part. They hold your feature information, timestamps and user information, making them ideal for collaberation, but they cannot be read by most slicers.
 * ``.STL`` files are the most common way to export 3D models for printing. They represent the surface geometry of a 3D object without any color, texture information, making them very lightweight.
 * ``.STEP`` files retain feature history and are widely used for sharing between CAD programs. Most commonly, you can export your assembly as a STEP file to preserve relations or spacing for multicolor prints, at the cost of a larger file size.

1. Open the part or assembly and ensure the model is fully defined. This is the time to check with an officer or hatchling director before printing.
2. Choose :menuselection:`File --> Save As`.
3. For an ``.STL``:

   - Change the file type to ``STL (*.stl)``.
   - Click :guilabel:`Options` and set ``Output As`` to ``Binary`` for smaller files.
   - Set the deviation/tolerance values (``0.01 mm`` is a good starting point) and ensure the units match your design.
   - Confirm OK, then save.

4. For a ``.STEP``:

   - Repeat the save-as process but select ``STEP AP214 (*.step)``.
   - Under :guilabel:`Options`, pick ``AP214`` for better color/layer metadata.
   - Save to the same project folder as the STL.

Slicing
-------

Material Selection:
~~~~~~~~~~~~~~~~~~~

- **PLA**: Easy to print, biodegradable, most common filament.
- **PETG**: More flexible and higher peak strength compared to PLA, meant for durability.
- **ABS**: Strong and heat-resistant, but requires heated bed and enclosure. Risk of warping. Common in injection molding.
- **TPU**: Flexible material, meant for parts that need to bend, stretch, or bounce.
- **Polycarbonate (PC)**: Extremely strong and heat-resistant, ideal for high-stress applications but challenging to print.
- **ASA**: Similar to ABS but with better UV resistance, suitable for outdoor applications.
- **CF (Carbon Fiber Reinforced)**: Improves strength and stiffness, common add on to PLA or PETG (PLA-CF, PETG-CF); requires hardened nozzles due to abrasive nature. 
- **HF (High Flow)**: Improves print speed and layer adhesion, filaments like PETG-HF, ABS-HF, or PC-HF. Its like premium gas for your car, its a little nicer but doesn't change much.

Choosing a Slicer:
The slicer converts your 3D model into machine instructions for the printer. This is the step where you set material, infill, supports, and print parameters. Any slicer can work if it outputs standard G-code, but we recommend:

- **Bambu Studio**: Native support for AMS, multi-color, and machine profiles. Reccommended for TURTLE Bambu printers. 
- **Cura**: Common base that many proprietary slicers are based on (Lulzbot, PrusaSlicer, Creality*, etc). Good support for various personal printers.
- **PrusaSlicer**: Open-source, stronger but sharper leaerning curve. Provides foundation for plugins, custom supports, etc.
- **OrcaSlicer**: Newer slicer endorsed by the Rapid Prototyping Studio (RPS) for use on their machines and in MEEN 210.


Machine Parameters:
~~~~~~~~~~~~~~~~~~~

- Nozzle Diameter: Most printers use a 0.4 mm nozzle, but diameter affects print speed at final resolution.
- Layer Height: Commonly set between 0.1 mm (high detail) to 0.3 mm (faster prints). Typically tuned with nozzle diamter.
- Line widths: Usually stick to default based on nozzle diameter, but can affect layer adhesion within and between layers.

Printing Parameters:
~~~~~~~~~~~~~~~~~~~~

- Infill Pattern: The optimal infill will depend on geometry, required strength infill, and print time. Gyroid is a good all-around choice. Lightning performs well for low-infill parts, and cubic for high-infill parts. Rectilinear is fast to print. 
- Infill Density: 15-20% is plenty for most parts, increasing infill makes parts stronger and heavier. 
- Support Structures: Tree supports are often optimal but you may want to select ``normal`` for holes requiring presice fits, or long flat overhangs that tree may not contact well. You can set the overhang angle threshold to control how much support is generated, or you can paint supports manually.
- Support Style: 

  - Tree Styles: There are ``slim``, ``strong``, ``hybrid``, and ``organic`` styles. ``Slim`` branches slower and saves material. ``Strong`` is makes more, overlapping trunks to add strength. ``Hybrid`` seems to create fewer, stronger tree branches. ``Organic`` branch faster to have better contact with the part surface.
  - Normal Styles: There are ``grid``, and ``snug``. ``Grid`` alternates the perimiter direction each layer for better stability at the cost of vertical strength. ``Snug`` places supports closer to the part surface for better support, but is harder to remove, can affect tolerancing, and part surface.

.. note::

   If you need a stronger part, you are often better off increasing wall loops than direct infill. Just like an I-beam puts more mass on the edges to better resist bending, increasing wall loops places more material:

   1. Along the edges to increase mass moment of inertia.
   2. On the loading surface where most fracture failures initialize.

Bambu Studio Slicing:
~~~~~~~~~~~~~~~~~~~~~

1. Import the ``.STL``.
2. Select the printer profile (``Bambu X1C 0.4 nozzle``) and filament.
3. Orient the part. Aligning layer lines for strength and minimzing support is an art form; most of the type its fine to trust the auto-orient.
4. Set infill percentage/pattern. For most parts, ``15%`` gyroid is plenty, then you can increase wall loops as needed for additional strength.
5. Make sure to generate supports; for most applications ``tree(auto)`` is optimal.
6. On the ``Print Plate`` button, select the ``Export plate sliced file`` then save to an SD card.
7. Wait for the file to completely upload, then eject the SD card safely to prevent file corruption.

Bambu Printing
--------------

1. **Prep the printer**

   .. tab-set::

      .. tab-item:: Polyetherimide (PEI) Plate

         - Ensure the PEI plate is clean. If there is an oily residue, use dish soap and sponge by the sink to remove oils.
         - Ensure the plate is dry and clean before printing.
         - Avoid PETG, TPU, Nylon, PC, and CF-filled materials on PEI; they chemically bond to the surface. Switch to a Cool/Engineering plate for those materials.
         - Do not put Elmer's glue on the PEI plates. A clean PEI surface is usually sufficient for adhesion, but glues and constant cleaning will degrade the surface over time.

      .. tab-item:: Cool/Engineering Plate

         - Ensure the engineering plate is completely dry.
         - Apply Elmer's glue stick. You just need a couple of dense swipes, not a whole layer.
         - When flipping the plate over, ensure to completely remove the glue from the side you are placing face-down onto the print bed. Please use water and a sponge to clean off any residual glue.
         - Do not cool the plate too quickly. Let your print finish and open the door to let the plate cool naturally. Rapid cooling may warp the plate or create bubbles between the layers.

   .. tab-set::

      .. tab-item:: Bambu X1 Carbon

         - Printers may have ``lidar sensor errors``, this is fine to ignore. The lidar is used for obstacle detection when using the AMS, but is not required for printing.
         - Ensure there is enough filament in the AMS slots; load fresh spools if needed.

      .. tab-item:: Bambu P1S

         - Ensure that the materials in the AMS are correctly set with the slicer.
         - Ensure there is enough filament in the AMS slots; load fresh spools if needed.

      .. tab-item:: Other Printers

         - Ensure the print bed is properly leveled.
         - Set correct material and load/unload filament as needed.
         - Be aware of any printer-specific setup steps, including recommended print parameters.
         - If printing without an enclosure, note that the lab is typically humid and can affect print quality.

2. **Start the print**

   - Insert the SD card into the printer.
   - From the printer menu, select the sliced file and start the print.
   - Confirm material selections if prompted.

3. **During the print**

   - Please monitor the first two layers to ensure proper adhesion before leaving the lab.
   - If filament runs out, the Bambu AMS will only auto-switch if it has at least two spools of the same material, manufacturer, and color. It does not know any of these things, and therefore can be told what it needs to auto-switch if nesessary.

4. **Post-print**

   - Allow the bed to cool so parts release cleanly.
   - Clean up any scrap filament; if you do not know whose part it is, please place it in the bin labeled "Homeless Prints". 

Reach out to an officer in the lab if you have any issues or questions during the printing process!
