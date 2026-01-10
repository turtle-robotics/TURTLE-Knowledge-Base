Embedded Programming
====================

.. tab-set::

   .. tab-item:: Arduino IDE

      Setup & Configuration
      ---------------------

      1. Download and install the Arduino IDE from the official website: https://www.arduino.cc/en/software

      2. Connect your board to the computer via USB

         .. tab-set::
            
            .. tab-item:: Windows

               Open Device Manager (Win + X > Device Manager) and look under "Ports (COM & LPT)" to verify your board appears.

            .. tab-item:: Linux
            
               Run ``ls /dev/tty*`` in the terminal before and after plugging in your board. Look for new entries like ``/dev/ttyUSB0`` or ``/dev/ttyACM0``.

      3. Set up the board and port by navigating to:
         
         - Tools > Board: Select your board type
         - Tools > Port: Select the correct COM port

      4. Install any libraries needed for your project via the Library Manager:
         
         a. Go to Sketch > Include Library > Manage Libraries...
         b. Once installed, include it in your sketch via Sketch > Include Library

      .. note::
      
         Each library you include will use memory on your microcontroller, which can run out quickly if you include too many libraries.

      5. Write your code in the IDE, likely starting from a template or hatchling example: https://github.com/turtle-robotics/Hatchling-Examples
      
      6. Verify your code by clicking the Verify button (check mark at top-left) to check for errors
      
      7. Click Upload (right arrow at top-left) to compile and upload the sketch to your board

   .. tab-item:: VS Code

      ESP-IDF Extension
      -----------------

      The recommended way to work with ESP microcontrollers in VS Code is using the ESP-IDF (ESP-IoT Development Framework) extension.

      Installation
      ~~~~~~~~~~~~~

      1. Open VS Code
      2. Navigate to the Extensions marketplace (Ctrl+Shift+X / Cmd+Shift+X)
      3. Search for "ESP-IDF" by Espressif
      4. Click Install on the official extension
      
      Espressif has their own Quick Installation Guide: https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md

.. TODO::
 
   talk about arm and amd 