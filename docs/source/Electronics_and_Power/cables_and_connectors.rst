Cables & Connectors
===================

DC Power
-----

 * XT30/60/90 Connectors - most common for battery systems. Comes in three (popular) sizes based on current rating. 
 * Deans T-Plug Connectors - popular in semi-modular RC applications. Typically rated for lower current than XT connectors.
 * Barrel Connectors - most common on commercial electornics. Can be very proprietary in size.
 * Anderson Powerpole Connectors - FIRST Robotics standard connector. Universtally genderless design, color coded for various outputs.
 * 4mm Bullet Connectors - common for smaller ESC connections. Have a a smaller profile to other high-current connectors.

.. warning::
   USB ports on microcontroller boards are not designed for high current (limited to ~200mA). Avoid using USB ports for power when possible.

Telemetry 
---------

 * UART - Universal Asynchronous Receiver/Transmitter: a very common serial RX + TX communication protocol. Ports connect in series TX -> RX and RX -> TX.
 * I2C - Inter-Integrated Circuit: a common protocol for short-distance communication between components. Uses two wires (SDA for data, SCL for clock) to allow multiple devices to share the same bus with unique addresses.
 * CAN Bus - Controller Area Network: a robust vehicle bus standard designed to allow microcontrollers and devices to communicate. Voltage difference provides robustness against line loss and interference.
 * PWM - Pulse Width Modulation: a modulation technique used to encode a message into a pulsing signal. Commonly used for motor control and servos.

.. note ::

   There are plenty of open source communication protocols (SPI, RS232, RS485, etc), as well as various proprietary protocols. Industry practice considers EMI, cybersecurity, and speed concerns, but the ones listed above are very well documented and designed for modularity.
