Cables & Connectors
===================

Overview
--------

.. todo::

   Provide guidance on selecting appropriate cables and connectors for robotics applications. Cover wire gauge selection based on current capacity, voltage ratings, connector current ratings and derating factors, proper crimping and soldering techniques, wire routing and strain relief best practices, and tips for ensuring reliable connections in high-vibration environments. Include reference tables for common wire gauges and ampacity ratings.

Power
-----

 * DC Power Connectors

   - XT30/60/90 Connectors - most common for battery systems. Comes in three (popular) sizes based on current rating. 
   - Deans T-Plug Connectors - popular in semi-modular RC applications. Typically rated for lower current than XT connectors.
   - Barrel Connectors - most common on commercial electornics. Can be very proprietary in size.
   - Anderson Powerpole Connectors - FIRST Robotics standard connector. Universtally genderless design, color coded for various outputs.
   - 4mm Bullet Connectors - common for smaller ESC connections. Have a a smaller profile to other high-current connectors.

.. warning::
   USB ports on microcontroller boards are typically not designed for high current applications (limited to ~200mA). Avoid using USB ports for power delivery through microcontroller boards in robotics applications.

Telemetry 
---------

 * UART - Universal Asynchronous Receiver/Transmitter, a very common serial communication protocol. 
 * I2C - Inter-Integrated Circuit, a common protocol for short-distance communication between components.
 * SPI - Serial Peripheral Interface, a time-synchronous serial communication protocol used for short-distance communication.
 * CAN Bus - Controller Area Network, a robust vehicle bus standard designed to allow microcontrollers and devices to communicate. Voltage difference provides robustness against line loss and interference.
 * PWM - Pulse Width Modulation, a modulation technique used to encode a message into a pulsing signal. Commonly used for motor control and servos.