Motors
======

Overview
--------

.. todo::

   Describe the fundamental operating principles of electric motors used in robotics. Include details on how motor performance is characterized (KV rating, efficiency curves, thermal limits), selection criteria based on application requirements, typical motor datasheets and what parameters matter most, and practical tips for integrating motors with ESCs and power systems.

Motor Types
-----------

 * Brushless DC Motors (BLDC) - Commonly used in electric vehicles for efficiency and power-to-weight ratio.
 * Brushed DC Motors - Simpler design, often used in hobbyist applications and low-cost robotics.
 * Stepper Motors - Provide precise position control, ideal for CNC machines and 3D printers.
 * Servo Motors - Combine a motor with a feedback sensor for precise control of angular position, velocity, and acceleration.

Design Calculations
-------------------

 * torque = force x radius
 * power = torque x angular velocity
 * speed = (voltage - back EMF) / resistance

Control Methods
---------------

 * PWM Control - Varying the duty cycle of a digital signal to control motor speed.
 * Voltage Control - Adjusting the voltage supplied to the motor to change its speed.
 * Current Control - Regulating the current to manage torque output.
 * Position Control - Maintaining a specific position using feedback from encoders or sensors.
 .. Note::
    Some motors, like stepper motors and servo motors, inherently have internal control mechanisms. Please refer to the product's technical documentation for details.

