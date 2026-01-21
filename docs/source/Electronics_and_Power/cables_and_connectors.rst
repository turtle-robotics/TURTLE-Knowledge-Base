Connectors & Communication
==========================

Connectors
----------

.. |xt| image:: /static/xt.png
    :width: 200px
    :alt: XT Connectors

.. |deans| image:: /static/deans.png
    :width: 200px
    :alt: Deans T-Plug

.. |barrel| image:: /static/barrel.png
    :width: 200px
    :alt: Barrel Connectors

.. |anderson| image:: /static/anderson.png
    :width: 200px
    :alt: Anderson Powerpole

.. |bullet| image:: /static/bullet.png
    :width: 200px
    :alt: 4mm Bullet Connectors

.. |mr30-m| image:: /static/mr30-m.png
    :width: 200px
    :alt: MR30 Male

.. |mr30-f| image:: /static/mr30-f.png
    :width: 200px
    :alt: MR30 Female

.. |mt60-m| image:: /static/mt60-m.png
    :width: 200px
    :alt: MT60 Male

.. |mt60-f| image:: /static/mt60-f.png
    :width: 200px
    :alt: MT60 Female

.. |mmcx-m| image:: /static/mmcx-m.png
    :width: 200px
    :alt: MMCX Male

.. |mmcx-f| image:: /static/mmcx-f.png
    :width: 200px
    :alt: MMCX Female

.. |ec3| image:: /static/ec3.png
    :width: 200px
    :alt: EC3 Connectors

.. |ec5| image:: /static/ec5.png
    :width: 200px
    :alt: EC5 Connectors

.. note::

   Telemetry protocols are the signals being sent, connectors are the physical connection. Many connectors can run multiple protocols, so be prepared to solder different connectors running the same protocol, and be careful of connectors running different protocols.

.. list-table:: Connector Types
   :header-rows: 1
   :widths: 20 45 40

   * - Name
     - Image
     - Use Case / Notes
   * - XT30/60/90 Connectors
     - |xt|
     - Most common for battery systems. Three sizes based on current.
   * - Deans T-Plug Connectors
     - |deans|
     - Popular in RC applications. Typically lower current rating than XT.
   * - Barrel Connectors
     - |barrel|
     - Most common on proprietary commercial electronics.
   * - Anderson Powerpole Connectors
     - |anderson|
     - Universally genderless design, color coded for various outputs.
   * - 4mm Bullet Connectors
     - |bullet|
     - Used in power supply. Smaller profile for high-current.
   * - MR30 Connectors (Male)
     - |mr30-m|
     - Rated for higher currents. Gendered connector.
   * - MR30 Connectors (Female)
     - |mr30-f|
     - Rated for higher currents. Gendered connector.
   * - MT60 Connectors (Male)
     - |mt60-m|
     - Heavy-duty connector for high power applications.
   * - MT60 Connectors (Female)
     - |mt60-f|
     - Heavy-duty connector for high power applications.
   * - EC3 Connectors
     - |ec3|
     - Common in drone and high-performance RC. Compact design.
   * - EC5 Connectors
     - |ec5|
     - Larger version of EC3 for higher currents. Used in RC.
   * - MMCX Connectors (Male)
     - |mmcx-m|
     - Miniature precision connectors for RF/antenna applications.
   * - MMCX Connectors (Female)
     - |mmcx-f|
     - Miniature precision connectors for RF/antenna applications.

.. list-table:: XT Connector Ratings
   :header-rows: 1
   :widths: 15 20 20 15

   * - Connector
     - Continuous Current
     - Peak Current
     - Wire Size
   * - XT30
     - 15–30 A
     - 30–60 A
     - 16–20 AWG
   * - XT60
     - 40–60 A
     - 80–120 A
     - 10–14 AWG
   * - XT90
     - 70–90 A
     - 120–200 A
     - 8–10 AWG

.. warning::
   Telemetry cables are not designed to handle high current. Always provide isolated power to prevent overdrawing 5v signal wires. This is especially common with PWM, UART, and I2C connections.

Communication Protocols
-----------------------

.. csv-table:: Communication Protocols
   :header: "Name", "Pinout", "Voltage / Signal", "Use Case / Notes"
   :widths: 15, 20, 20, 45

   "UART", "TX, RX (+ GND, Power optional)", "3.3V or 5V logic levels", "Universal Asynchronous Receiver/Transmitter. Very common serial RX + TX communication. Ports connect in series TX → RX and RX → TX. Simple point-to-point communication."
   "I2C", "SDA, SCL (+ GND, Power)", "3.3V or 5V open-drain", "Inter-Integrated Circuit. Common for short-distance communication. Two-wire bus allowing multiple devices with unique addresses. Requires pull-up resistors."
   "CAN Bus", "CAN_H, CAN_L (+ GND, Power)", "Differential voltage (~5V)", "Controller Area Network. Robust vehicle bus standard for microcontroller communication. Voltage difference provides robustness against line loss and interference. Common in automotive and industrial applications."
   "PWM", "Signal, GND (+ Power optional)", "3.3V or 5V logic levels", "Pulse Width Modulation. Modulation technique encoding messages into pulsing signals. Commonly used for motor control, servos, and ESC communication. Single wire data transmission."

.. note ::

   There are plenty of open source and proprietary communication protocols (SPI, RS232, RS485, etc). Industry practice considers EMI, cybersecurity, and speed concerns. These are some of the most common well-documented protocols. Generally, proprietary protocols come with proprietary connectors—try to avoid vendor lock-in when possible.
