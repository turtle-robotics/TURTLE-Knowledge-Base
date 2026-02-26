Getting Started
===============

Welcome to TURTLE Robotics! Robotics can be challenging, but your goals should be challenging. This page is meant to guide you towards some useful skills to become the roboticist you were meant to be. This is by no means meant to be comprehensive, nor are all of these skills required to be succcessful. This is just meant to help know what else is out there.

Robotics generally falls into three categories, and those that can master all three ascend to the title of "Tripe Threat" or "Full Stack" Roboticists:
 1) Mechanical - CAD, dynamics, manufactuirng, design analysis
 2) Electronics - circuit design, power systems, sensors, actuators
 3) Software - embedded programming, ROS, computer vision

The purpose of the full stack is because of the "secret" skills that really require all three:
 * Control Theory - modeling dynamic systems and sensors for feedback control on high-performance hardware
 * Mechatronics - designing electromechanical systems for efficiency
 * Systems Engineering - requirements flowdown, integration, testing, and project management should require an understanding of the entire system

.. note::

  The difference between robotics and mechatronics is intelligence: mechatronics means desinging a robot that moves, robotics means integrating sensors to make it think. Generally, robotics is software-heavy and mechatronics is hardware-heavy, but there is inherently a lot of overlap.


----

Foundation Skills
-----------------

Mechanical 
~~~~~~~~~~

 * CAD - Solidworks is the industry standard, but OnShape and Fusion 360 are free. Check out :doc:`SolidWorks <Mechanical_and_Design/solidworks>` for a starter workflow.
 * Mechanisms - understanding how to design linkages and mechanisms is crucial for building complex robots. Browse the classic `507 Mechanical Movements <https://507movements.com/>`_ for intuition on linkages.
 * Materials & Manufacturing - properties of materials & how to fabricate parts are essential. See :doc:`Materials <Mechanical_and_Design/materials>` and :doc:`3D Printers <Mechanical_and_Design/3d_printers>` for the most common fabrication method in the lab.

Electrical
~~~~~~~~~

 * Circuit Design - understanding how to design and read circuit schematics is crucial for building reliable electronics. Start with connectors and wiring conventions in :doc:`Cables & Connectors <Electronics_and_Power/cables_and_connectors>`.
 * Motors - understanding how to select and control motors is essential for building a functional robot. See :doc:`Motors <Electronics_and_Power/motors>`.
 * Power Systems - understanding power constraints and how to power your robot with batteries is essential. See :doc:`Batteries <Electronics_and_Power/batteries>`.

Software
~~~~~~~~

 * Linux - most robots run on Linux, and a lot of important software is built for Linux. It is recommended to dual-boot your personal laptop. See :doc:`Linux <Programming_and_Software/linux>`.
 * ROS - the Robot Operating System (ROS) is a powerful framework for building robot software. See :doc:`ROS <Programming_and_Software/ros>`.
 * Raspberry Pi - See :doc:`Raspberry Pi <Programming_and_Software/raspi>` for setup and usage. In industry, it may be a Jetson, Mac mini, or Kubernetes cluster, but having a testbed for OS and hardware constraints is important.

.. tip::

   Check out the :doc:`/skill_tree` for an interactive prerequisite map of all skills in this knowledge base.
