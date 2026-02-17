Raspberry Pi
============

Hardware
--------------

Introduction
~~~~~~~~~~~~~~~~~~~~~~~~~
Raspberry Pi makes computers in several different series:

- **Single-board computers (SBCs).** The flagship Raspberry Pi series offers high-performance hardware, a full Linux operating system, and a variety of common ports in a form factor roughly the size of a credit card.

- **Keyboard computers (X00).** Raspberry Pi keyboard computers combine SBC hardware, a full Linux operating system, and common ports inside a compact keyboard case.

- **Zero.** Small and affordable models in a minimal form factor that provide a full Linux operating system and essential ports with low power consumption.

- **Compute Module (CM).** Boards designed for embedded and industrial applications that provide the same hardware as flagship SBCs but in a smaller form factor with no on-board connectors. Instead, they connect to a separate baseboard that supplies the necessary ports and pins.

- **Pico (microcontrollers).** Small and versatile boards that don’t run Linux. Instead of removable storage, programs are flashed directly onto on-board memory. Pico microcontrollers are ideal for real-time control and lightweight embedded projects.

.. warning::
   Most Raspiberry Pi boards do not have analog inputs, so you will need to use an ADC (analog to digital converter) hat or external ADC to read analog sensors. Make sure to check the specifications of your Raspberry Pi board and any hats you are using to ensure compatibility with your sensors.

Powering a Raspberry Pi
~~~~~~~~~~~~~~~~~~~~~~~~~
The power supply requirements differ by Raspberry Pi model. All models require a 5.1V supply, but the current required generally increases according to model. All models up to the Raspberry Pi 3 require a micro USB power connector, while Raspberry Pi 4, Raspberry Pi 400, and Raspberry Pi 5 use a USB-C connector.

The current consumed by each Raspberry Pi depends on the peripherals connected.

Useful Raspberry Pi Resources
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- `Schematics and Mechanical Drawings of Raspberry Pi models <https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#schematics-and-mechanical-drawings>`_
- `USB power output specifications for Raspberry Pi <https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#universal-serial-bus-usb>`_
- `Fan cases for Raspberry Pi <https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#fan-cases>`_


.. todo::

   Cover approved Pi models, hats, and wiring conventions.

Tutorials
------------------

- `Setting up a Raspberry Pi <https://www.raspberrypi.com/documentation/computers/getting-started.html>`_
- `Using camera modules with Raspberry Pi <https://www.raspberrypi.com/documentation/computers/camera_software.html>`_
- `AI software for Raspberry Pi <https://www.raspberrypi.com/documentation/computers/ai.html>`_
- `Raspberry Pi OS <https://www.raspberrypi.com/documentation/computers/os.html>`_

.. todo::

   Detail how images are flashed and configured for TURTLE use.



.. todo::
   
   Deployment Workflow
   -------------------
   Explain how code is deployed, logged, and updated on Pis.

References
----------
- https://www.raspberrypi.com/documentation/