Electronic Speed Controllers
============================

An electronic speed controller (ESC) is used to drive a brushless DC motor (BLDC). It takes in a control signal (usually PWM) from a flight controller or microcontroller and a DC power sources, and provides three-phase AC power to the motor. By rapidly switching the power to the motor windings in a specific sequence, the ESC can drive a motor. 

Some higher-end ESCs incorporate or require motor feedback (usually from Hall effect sensors or back-EMF sensing) to improve performance and efficiency.

Types of feedback
-----------------

 * Hall Effect Sensors - a small sensor that measures the flux from the rotating magnet past a coil to estimate the speed of the motor. Commonly configured in trios around the motor stator for three-phase systems.
 * Back-EMF Sensing - a 'sensorless' method where the ESC monitors the voltage induced in the motor windings to estimate rotor position. This method is carries higher uncertainty but is still used due to low hardware costs.

ESC Selection
-------------

.. todo::

   List criteria for choosing ESCs based on motor specs and use cases. Probably mention Odrive, modius, rev, etc.
