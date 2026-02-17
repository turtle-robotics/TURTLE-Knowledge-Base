Computational Fluid Dynamics (CFD)
============================

Computational fluid dynamics (CFD) is the science of using computers to predict liquid and gas flows based on the governing equations of conservation of mass, momentum, and energy. Fluids are all around us and sustain our lives in endless ways. The vibrations in your vocal cords generate pressure waves in the air that make speech possible, as well as hearing the spoken words. Without fluids, your tennis ball’s topspin would be meaningless, and your airplane wouldn’t generate any lift.  Through CFD, we can analyze, understand, and predict the fluids that make up nearly every part of our world. 

Software for Finite Element Analysis
-----------------------------
There are many software packages available for FEA, each with its own strengths and weaknesses. Some of the most popular FEA software packages include:

#. **Ansys Fluent:** Freely available at `TAMU Software Center <https://software.tamu.edu/public/AvailableSoftware.aspx>`_.
#. **SimFlow:** Free plan available at `SimFlow <https://sim-flow.com/>`_.
#. **OpenFOAM:** A free open-source software package for CFD available at `OpenFOAM <https://www.openfoam.com/>`_.
#. **Autodesk CFD:** Available at `Autodesk <https://www.autodesk.com/products/cfd/overview>`_.

Tutorials
-------------
- `Ansys Fluent Tutorial <https://www.ansys.com/academic/educators/education-resources/basics-of-cfd-simulation-with-ansys-fluent>`_
- `SimFlow Tutorials <https://help.sim-flow.com/tutorials>`_
- `OpenFOAM FEA Tutorial <https://www.openfoam.com/documentation/tutorial-guide>`_


How Computational Fluid Dynamics Works
-------------
There are many different approaches to solving fluid flow on a computer. Before you start, you need to determine what methodology you will use at a high level, i.e., what governing equations will be solved. This choice will narrow down which computational approaches are available. Assuming a continuum approach is chosen (which is quite common), there are essentially 3 steps. 

First, the fluid flow domain (the continuous region to be calculated), is identified (typically represented by a CAD model). Then, a mesh is applied to dissect the domain into well-defined cells. Finally, the discretized version of the governing fluid equations is solved by the computer within each cell. In the context of high-performance computing (HPC), an optional step is assigning different cell groups to different computers for parallel processing. 

#. **Identify the fluid flow domain to be solved**

.. image:: /static/fluid-flow-domain.png
          :width: 50%

#. **Discretize the domain into the desired mesh size and grid spacing**

.. image:: /static/fluid-flow-domain-gridlines.png

#. **Assign processors to different regions and apply the appropriate calculus equations**

.. image:: /static/fluid-flow-domain-processors.png
          :width: 50%

References
----------
- https://www.ansys.com/simulation-topics/what-is-computational-fluid-dynamics

