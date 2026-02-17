Finite Element Analysis
=======================

Finite element analysis (FEA) is the process of predicting an object’s behavior based on calculations made with the finite element method (FEM). While FEM is a mathematical technique, FEA is the interpretation of the results FEM provides. FEA gives engineers insights into complex systems and structures, helping them make more informed design decisions. 

- **FEM** uses math to break complex systems into smaller, simpler pieces, or “elements.” It then applies differential equations to each element individually, using the power of computers to divide, then conquer engineering problems.  
- **FEA** is the application of FEM equations and is the basis of many types of simulation software. It’s used to validate and test designs safely, quickly, and economically by creating virtual models of real-world assets.

Finite element modeling makes it possible to simulate the physical world without the expense, time, or risk of building physical prototypes. These models are used to solve for various conditions and scenarios across a variety of industries, especially those with complex or high-risk environments such as aerospace and biomechanics. 

FEA Software
-----------------
There are many software packages available for FEA, each with its own strengths and weaknesses.
Some of the most popular FEA software packages include:

#. **SolidWorks Simulation:** Freely available at `TAMU Software Center <https://software.tamu.edu/public/AvailableSoftware.aspx>`_.
#. **Ansys Mechanical:** Freely available at `TAMU Software Center <https://software.tamu.edu/public/AvailableSoftware.aspx>`_.
#. **SimScale:** Free plan available at `SimScale <https://www.simscale.com/>`_.
#. **OpenFOAM:** A free open-source software package for CFD available at `OpenFOAM <https://www.openfoam.com/>`_.

Tutorials
-----------------

- `SolidWorks FEA Guide <https://www.solidworks.com/sw/images/content/Training/SolidWorks_Simulation_Student_Guide-ENG.pdf>`_
- `Ansys FEA Tutorial <https://www.ansys.com/academic/educators/education-resources/basics-of-fea-simulation-with-ansys-mechanical>`_
- `SimScale FEA Tutorial <https://www.simscale.com/blog/learn-finite-element-analysis-fea/>`_
- `OpenFOAM FEA Tutorial <https://www.openfoam.com/documentation/tutorial-guide/5-stress-analysis/5.1-stress-analysis-of-a-plate-with-a-hole#x16-830005.1>`_

How FEA Works 
-----------------
Finite Element Analysis works by discretizing the domain of interest and then assembling physics equations to solve the engineering problem at hand.  By assembling these elements together to represent the physical system, engineers can predict the behavior of the whole structure. With FEA, answering the question, “Will my car be safe after being driven over 100,000 miles?” starts by dividing the car into systems, systems into components, and components into elements using a grid of elements, known as meshing. 

**The Finite Element Analysis Process**

- **Pre-process:** Define the physics and real-world conditions to be used in the model.
- **Process:** Divide the object into finite elements via meshing and apply the relevant physics representations and/or equations to each element. Then assemble the equations and solve them.
- **Post-process:** Compute results to analyze and interpret implications for the whole domain.

.. image:: /static/basics-of-fea-simulation-ansys-mechanical.png
          :width: 50%

References
----------
- https://www.ansys.com/simulation-topics/what-is-finite-element-analysis