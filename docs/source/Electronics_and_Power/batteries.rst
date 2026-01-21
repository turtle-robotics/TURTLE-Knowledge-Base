Batteries
=========

Math
----

 * **Voltage** adds in series: V_total = V_1 + V_2 + ... + V_n
 * **Current** adds in parallel: I_total = I_1 + I_2 + ... + I_n
 * **Power** is measured in watts (W), which represents the "load" of the system (and the heat generated!). 
 * **Energy** is measured with power by time, or in watt-hours (Wh), representing the energy stored, or work that can be done.
 * **Capacity** is measured in milliamp-hours (mAh) or amp-hours (Ah), representing the charge a battery can store.
 * **Continuous Current (CCA)** is the maximum current a battery can safely deliver continuously.

Packs
~~~~~

Rarely will a single cell be able to power your entire system, so often you will need to connect multiple cells into a battery pack. These are done by connecting cells in series, parallel, or both.

These combinations are notated by `S` and `P`, where `S` is the number of cells in series, and `P` is the number of cells in parallel. For example, a 3S2P pack contains three cells in series, and two of these series strings connected in parallel. When there is only one cell in parallel, it is common to drop the `1P` notation, so a a `4S1P` pack would just be called `4S`.

We know that voltage adds in series, and current adds in parallel, so we can find the total voltage by adding the cell voltages in series, and the total pack current capacity by adding the cell current capacities (in mAh) in parallel.

.. note::

   Energy capacity in Wh is found by multiplying voltage (V), current (A), and time (h). 
   By measuring capacity in mAh, we can find the energy capacity of a battery pack by multiplying the total voltage (from series connections) by the total current capacity (from parallel connections).

Sizing & Selection
------------------

Chemistries
~~~~~~~~~~~

 * LiPo "Lie-poh" (Lithium Polymer)
 * Li-ion "Lie-on" (Lithium Ion)
 * NiMH "Nim" (Nickel Metal Hydride)
 * Pb Acid (Lead Acid)
 * LiFePO4 "Life-Poh" (Lithium Iron Phosphate)

Sizing
~~~~~~

 #. Determine voltage requirements of your system.
 #. Estimate current draw under typical and peak loads.
 #. Calculate required capacity based on desired current x runtime.
 #. Choose a battery chemistry that fits your weight, size, and performance needs.
 #. Select a pack configuration (SxP) that meets voltage and capacity requirements.

Common Cell Formats
~~~~~~~~~~~~~~~~~~~

Individual battery cells come in standardized sizes. The most common are:

 * **18650** - Cylindrical cell, 18mm diameter × 65mm length. Commonly used in custom pack builds.
 * **21700** - Cylindrical cell, 21mm diameter × 70mm length. Newer format with higher capacity than 18650.

Charging Procedures
-------------------

.. warning::

   Charging a LiPo or Li-ion battery is likely the single most dangerous activity you will do in your time with TURTLE. Our chargers have built in safety features, but I don't intend on verifying them.

 #. Inspect the battery for any signs of damage, swelling, or punctures.
 #. Do not charge batteries that show signs of damage. Older batteries are susceptible to catastrophic failure, especially during charging.
 #. Note the battery chemistry (LiPo, Li-ion, NiMH, etc.), voltage, and capacity (mAh/Ah).
 #. Connect the balance connector (typically JST) to the charger if available—some chargers require this connection and will refuse to charge without it.
 #. Connect the main power connector (typically XT60) last.
 #. Monitor the charging process. **do not leave batteries charging unattended.**
 #. Store batteries in a fireproof container or LiPo safety bag when not in use.


High-Power Systems
------------------


Battery Management Systems (BMS)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A Battery Management System (BMS) is a built-in circuit manages battery charging& discharging. They are used when *many* cells are connected and in large loads. A BMS typically provides charging + Cell balancing, Over-charge protection, Over-discharge protection, Temperature monitoring, and Current limiting.

Anti-Spark Connectors:
~~~~~~~~~~~~~~~~~~~~~~

Anti-spark connectors are sometimes used on high-capacity packs to prevent dangerous arcs when connecting/disconnecting batteries. These connectors use a series resistance to limit inrush current.


Voltage Sag
~~~~~~~~~~~

Voltage Sag occurs when current draw causes a temporary voltage drop. This is normal under load and recovers when current draw decreases. Monitor voltage sag to ensure your battery can maintain the voltage your system requires under peak current.

Ripple Voltage
~~~~~~~~~~~~~~

Ripple Voltage is high-frequency voltage oscillation superimposed on the DC voltage output. It's typically caused by switching circuits (PWM, DC-DC converters, etc.) and can interfere with sensitive electronics. Capacitors are used to filter ripple voltage.
