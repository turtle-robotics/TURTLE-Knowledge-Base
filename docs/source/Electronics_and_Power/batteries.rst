Batteries
=========

Math
----

 * Voltage adds in series: V_total = V_1 + V_2 + ... + V_n
 * Current adds in parallel: I_total = I_1 + I_2 + ... + I_n
 * Power is measured in watts (W), which is found by multiplying the voltage and current. 
 * Energy is measued with power by time, or in watt-hours (Wh). 

However, most cells instead show a rating in miliamp hours (mAh). For a given cell, the voltage is known by the chemstry, and therefore the energy capacity can be found by simply diving the watt-hours by the voltage to find the amp-hours (Ah). This value will become useful as we start to size batteries for our applications.

Packs
~~~~~

Rarely will a single cell be able to power your entire system, so often you will need to connect multiple cells into a battery pack. These are done by connecting cells in series, parallel, or both.

These combinations are notated by `S` and `P`, where `S` is the number of cells in series, and `P` is the number of cells in parallel. For example, a 3S2P pack contains three cells in series, and two of these series strings connected in parallel. When there is only one cell in parallel, it is common to drop the `1P` notation, so a a `4S1P` pack would just be called `4S`.

We know that voltage adds in series, and current adds in parallel, so we can find the total voltage by adding the cell voltages in series, and the total pack current capacity by adding the cell current capacities (in mAh) in parallel.

.. note::

   Energy capacity in Wh is found by multiplying voltage (V), current (A), and time (h). 
   By measuring capacity in mAh, we can find the energy capacity of a battery pack by multiplying the total voltage (from series connections) by the total current capacity (from parallel connections).

Chemistries
-----------

 * LiPo (Lithium Polymer)
 * Li-ion (Lithium Ion)
 * NiMH (Nickel Metal Hydride)
 * Pb Acid (Lead Acid)

.. todo::

   Compare LiPo, Li-ion, NiMH, and when each is used.

Sizing & Selection
------------------

 #. Determine voltage requirements of your system.
 #. Estimate current draw under typical and peak loads.
 #. Calculate required capacity based on desired runtime.
 #. Choose a battery chemistry that fits your weight, size, and performance needs.
 #. Select a pack configuration (SxP) that meets voltage and capacity requirements.

Charging Procedures
-------------------

.. warning::

   Charging a LiPo or Li-ion battery is likely the single most dangerous activity you will do in your time with TURTLE. Please proceed with extreme caution, and ask for help if you are ever unsure of what to do.

Before charging, always inspect the battery for any signs of damage, swelling, or punctures. Older batteries susceptible to catestrophic failure, espscially during charging.

First, take note of the chemistry, votlage, and capacity of the battery, as you will need to input this to the charger. TURTLE has some chargers that plug into a wall outlet, and some that require direct DC power from the DC power supply. Set the charger to match the battery specifications. The large plug (typically XT60 or similar) on the battery is for charging and discharging high current loads, while the smaller connector (typically JST or similar) is used by the charger to monitor and balance each cell. Always connect the balance connector to the charger if available, and some chargers may refuse to charge without the balance connector.
