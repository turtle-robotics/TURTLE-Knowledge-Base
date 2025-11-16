Arduino IDE
===========

IDE Configuration
-----------------

.. todo::

Library Management
------------------

Libraries are a collection of code that makes it easy for you to connect to a sensor, display, module, etc. For example, the LiquidCrystal library makes it easy to talk to character LCD displays.

You can easily install libraries via the Library Manager:
   1. Open Arduino IDE
   2. Go to Sketch > Include Library > Manage Libraries...
   3. In the Library Manager window, use the search bar to find the library you need
   4. Select the library from the list and click the Install button
   5. Once installed, you can include the library in your sketch by going to Sketch > Include Library and selecting it from the list

Build & Upload Process
----------------------

To upload a sketch to an Arduino-compatible board, follow these steps:
   1. Open Arduino IDE
   2. Connect board to computer via USB (USB cable may vary by board)
   3. Select board type from Tools > Board menu. You may need to install the board package via Board Manager first. The package should be in the product's documentation.
   4. Select appropriate COM port from Tools > Port menu (USB)
   5. Optional: Check the Verify button to compile the sketch for errors (check button at top-left)
   6. Click the Upload button to compile and upload the sketch to the board (right arrow at top-left)

Debugging Tools
---------------

The **Serial Monitor** is an essential tool when creating projects with Arduino. It can be used as a debugging tool, testing out concepts or to communicate directly with the Arduino board.

.. code-block:: cpp

   // Example code for Serial Monitor with different baud rates

   void setup() {
      Serial.begin(9600);
      Serial1.begin(38400);
      Serial2.begin(19200);

      Serial.println("Hello Computer");
      Serial1.println("Hello Serial 1");
      Serial2.println("Hello Serial 2");
   }

   void loop() {}

The **Serial Plotter tool** is a versatile tool for tracking different data that is sent from your Arduino board. It functions similarly to your standard Serial Monitor tool which is used to print data "terminal style", but is a greater visual tool that will help you understand and compare your data better.

.. code-block:: cpp

   // Example code for Serial Plotter

   int sensorValue;

   void setup() {
      Serial.begin(9600);
   }

   void loop() {
      sensorValue = analogRead(A0);
      Serial.print("Sensor Value: ");
      Serial.println(sensorValue);
      delay(100);
   }

.. todo::

   List serial monitor, logic analyzer, or ICE workflows for debugging.
