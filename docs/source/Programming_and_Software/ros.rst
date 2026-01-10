Robot Operating System (ROS)
============================

Quick Links
-----------

- `ROS Wiki <http://wiki.ros.org>`_: primary reference for distro details, APIs, and package index.
- `ROS 2 Documentation <https://docs.ros.org/en/humble>`_: jump into current ROS 2 guides (switch distro in the top left).

Recommended Distros
-------------------

.. list-table::
   :widths: 10 20 15 55
   :header-rows: 1

   * - Track
     - Distro (ROS)
     - Ubuntu
     - Notes
   * - LTS
     - Jazzy Jalisco (ROS 2)
     - 24.04 (Noble)
     - Latest LTS; best for new development where Ubuntu 24.04 is available.
   * - LTS
     - Humble Hawksbill (ROS 2)
     - 22.04 (Jammy)
     - Stable, widely used; supported through May 2027.
   * - LTS
     - Noetic Ninjemys (ROS 1)
     - 20.04 (Focal)
     - Legacy ROS 1; maintenance ends May 2025.
   * - STS
     - Iron Irwini (ROS 2)
     - 22.04 (Jammy)
     - Short-term support; bridge path toward Jazzy.

Starter Tutorials
-----------------

- ROS 2: `Core tutorials (beginner, intermediate) <https://docs.ros.org/en/humble/Tutorials.html>`_
- ROS 2: `Writing a simple publisher/subscriber (Python) <https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Understanding-ROS2-Nodes/Creating-Your-First-ROS2-Package-Py.html>`_
- ROS 2: `URDF + RViz quickstart <https://docs.ros.org/en/humble/Tutorials/Intermediate/URDF/Modeling-a-Robot-with-URDF.html>`_
- ROS 1: `Official wiki tutorials <http://wiki.ros.org/ROS/Tutorials>`_
- Simulation: `Gazebo-ROS integration overview <https://classic.gazebosim.org/tutorials?tut=ros_overview>`_

Workspace Structure
-------------------

.. todo::

   Define how catkin/colcon workspaces are organized in the repo.

Node Development
----------------

.. todo::

   Outline expectations for node composition, parameters, and logging.

Simulation & Testing
--------------------

.. todo::

   Document Gazebo/ignition workflows and automated tests.

Deployment
----------

.. todo::

   Explain how launches are run on robots and how configs are versioned.
