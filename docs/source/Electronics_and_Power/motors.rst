Motors
======
.. |steppers| image:: /static/stepper.png
    :width: 200px
    :alt: Stepper Motors
    :target: /static/stepper.png

.. |brushed_dcmotor| image:: /static/dc_motors.jpg
    :width: 200px
    :alt: Brushed DC Motors
    :target: /static/dc_motors.jpg

.. |brushed_dc_gif| image:: /static/brushed_dc.gif
    :width: 200px
    :alt: Brushed DC Motors gif
    :target: /static/brushed_dc.gif

.. |drone_motors| image:: /static/drone_motors.jpg
   :width: 200px
   :target: /static/drone_motors.jpg

.. |stepper_gif| image:: /static/stepper.gif
    :width: 200px
    :alt: Stepper Motor gif
    :target: /static/stepper.gif

.. |bldc_run| image:: /static/bldc_run.gif
    :width: 200px
    :alt: Brushless dc run
    :target: /static/bldc_run.gif

.. |bldc_vectors| image:: /static/bldc-motor-vectors.gif
    :width: 200px
    :alt: Brushless dc motor vectors
    :target: /static/bldc-motor-vectors.gif

.. |pot_abs| image:: /static/pot.png
    :width: 200px
    :target: /static/pot.png

.. |cap_calipers| image:: /static/book_calipers.jpg
    :width: 200px
    :target: /static/book_calipers.jpg

.. |optical_incremental| image:: /static/optical_encoder.png
    :width: 200px
    :target: /static/optical_encoder.png

.. |rot_opt| image:: /static/rotary-optical.png
    :width: 200px
    :target: /static/rotary-optical.png

.. |ele-enc| image:: /static/elevator_encoder.png
    :width: 200px
    :target: /static/elevator_encoder.png

.. |9g_servo| image:: /static/9g_servo.jpg
    :width: 200px
    :target: /static/9g_servo.jpg

.. |150kg_servo| image:: /static/150kg_servo.jpg
    :width: 200px
    :target: /static/150kg_servo.jpg

Physics Review
--------------

Flux and Lorentz
~~~~~~~~~~~~~~~~

Electric motors turn electrical power into torque via Lorentz forces. Core relationships:

.. math::

   V_{\text{applied}} = k_e \omega + I R_w

.. math::

   T = k_t I

.. math::

   P_{\text{mech}} = T \omega

.. math::

   P_{\text{elec}} = V I

Variables:

* ``V_applied`` supply voltage (V); ``k_e`` back-EMF constant (V·s/rad); ``ω`` speed (rad/s)
* ``I`` current (A); ``R_w`` winding resistance (Ω)
* ``T`` torque (N·m); ``k_t`` torque constant (N·m/A)
* ``P_mech`` shaft power, ``P_elec`` electrical power (W)

Linear Motor Model Derivation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inuitively, if we increase the voltage to a motor, it will spin faster; rather, the speed is proportional:

.. math::

   V = \alpha \omega

Similarly, if we grab the axle and increase the torque, we see the current rise; again this relationship is largely linear:

.. math::

   I = \frac{1}{\alpha} \tau

We can recall that electrical power (in Watts) is just voltage x current, then we can follow that:

.. math::

   P_{\text{elec}} = V I = (\alpha \omega)(\frac{1}{\alpha} \tau) = \omega \tau = P_{\text{mech}}

.. math::
   P_{\text{mech}} \approx P_{\text{elec}}

We can see that in order for power to be conserved, the linear relationship between the voltage and speed must match the linear relationship between torque and current. This value is the ``K_v`` of the motor. You can find it in units of ``rpm/V``, but it could just as easily be measured in ``N*m/A``.

Motor Types
-----------

.. list-table::
   :widths: 15 24 58
   :header-rows: 1

   * - Motor
     - Figure
     - Typical use / notes
   * - Brushed DC
     - |brushed_dcmotor| |brushed_dc_gif|
     - 
       - Two-wire input
       - High starting torque
       - Cheap and simple drive electronics
       - Brushes wear causing electrical noise + slow degredation 
       - Easy to drive/control
   * - Brushless DC (BLDC)
     - |drone_motors| |bldc_run| |bldc_vectors|
     - 
       - Higher efficiency and power density than brushed DC
       - Requires an ESC (electronic speed controller)
       - Generally more customizable for weight-constrained systems
       - Add Hall sensors or encoders for precise low-speed control
       - Used in most production-grade high-performance systems
   * - Stepper
     - |steppers| |stepper_gif|
     - 
       - Moves in discrete steps
       - Built-in step count serves as odometer
       - Can skip steps and throw off odometer count
       - Add feedback if loads are uncertain
       - NEMA Steppers used in most 3D printers
       - Microstepping provides half-notch at the cost of reducing holding torque

Encoders
--------
Encoders can be classified as either linear or rotary, and as either incremental or absolute

* Linear Encoders - measure lateral distance traveled along a slider
* Rotary Encoders - measure an anglular position about an axis

* Incremental - measure distance traveled along a path back and forth
* Absolute - measure with respect to a global origin without drift

+----------------------+---------------------------+---------------------------+
|                      | **Incremental**           | **Absolute**              |
+======================+===========================+===========================+
| **Linear**           | |cap_calipers|            | |ele-enc|                 |
|                      |                           |                           |
|                      | Capacitive strip encoder  | Optical / magnetic scale  |
|                      | (digital calipers, DROs)  | (CNC, elevators)          |
+----------------------+---------------------------+---------------------------+
| **Rotary**           | |optical_incremental|     | |pot_abs|                 |
|                      |                           | |rot_opt|                 |
|                      | Optical quadrature        | Potentiometer             |
|                      | (motors, velocity FB)     | Optical absolute encoder  |
+----------------------+---------------------------+---------------------------+

Servos
------

Servos solve a special problem between cheap, high torque, position-accurate motors. They serve as a single unit combining a DC brushed motor, absolute encoder, and (typically planetary) high torque gearbox to provide built-in position control. 

|150kg_servo| |9g_servo|