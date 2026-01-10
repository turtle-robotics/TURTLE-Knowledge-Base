Path Planning
=============

Environment Representation
--------------------------

.. todo::

   Document map formats (occupancy, point cloud) consumed by planners.

Planning Algorithms
-------------------

 * Graph Search Planners
   
   - Uninformed Search
     - Breadth-First Search
     - Depth-First Search
     - Dijkstra's Algorithm

   - Informed Search
     - A* Search
     - D* Lite

 * Sampling-Based Planners

   - Rapidly-exploring Random Trees (RRT)
   - Probabilistic Roadmaps (PRM)

 * Optimization-Based Planners

   - CHOMP
   - TrajOpt

.. todo::

   Compare graph search, sampling-based, and optimization planners we use.

Trajectory Optimization
-----------------------

 * Spline fitting
 * Polynomial trajectories
 * Kinodynamic planning
   * Dubin paths
   * Reeds-Shepp paths

.. todo::

   Explain how trajectories are smoothed and parameterized for controllers.

Validation & Testing
--------------------

.. todo::

   List simulation or on-robot tests required before deploying planners.
