Computational Fluid Dynamics (CFD)
============================

Computational fluid dynamics (CFD) is the science of using computers to predict liquid and gas flows based on the governing equations of conservation of mass, momentum, and energy. Fluids are all around us and sustain our lives in endless ways. The vibrations in your vocal cords generate pressure waves in the air that make speech possible, as well as hearing the spoken words. Without fluids, your tennis ball’s topspin would be meaningless, and your airplane wouldn’t generate any lift.  Through CFD, we can analyze, understand, and predict the fluids that make up nearly every part of our world. 

Software for Finite Element Analysis
-----------------------------
There are many software packages available for FEA, each with its own strengths and weaknesses. Some of the most popular FEA software packages include:

#. **Ansys Fluent:** Freely available at `TAMU Software Center <https://software.tamu.edu/public/AvailableSoftware.aspx>`_.
#. **SimFlow:** Free plan available at `SimFlow <https://sim-flow.com/>`_.
#. **OpenFOAM:** A free pen-source software package for CFD available at `OpenFOAM <https://www.openfoam.com/>`_.
#. **Autodesk CFD:** Available at `Autodesk <https://www.autodesk.com/products/cfd/overview>`_.

Examples of Computational Fluid Dynamics 
----------------------------------------

CFD is used wherever there is a need to predict fluid flow and heat transfer, or to understand the effects of fluid flow on a product or system. CFD analyzes different properties of fluid flow, such as temperature, pressure, velocity, and density, and can be applied to a broad range of engineering problems across industries, including:

.. list-table::
   :widths: 50 50
   :header-rows: 0
   :class: borderless

   * - **Aerospace and Defense:**  
        CFD makes it possible to model the airflow around aircraft to predict lift and drag, known as external aerodynamics. This is important as companies look to optimize aircraft designs for improved performance and decreased fuel usage. CFD can also simulate complex systems within the aircraft's interior, such as cabin air circulation, to predict air quality. Key applications include Avionics cooling, aero-optics, external aerodynamics, cabin HVAC, and propulsion.
     - .. image:: /static/aerospace-cfd-airplane-wing.png
          :width: 100%
          :alt: Ansys Fluent simulation of an airplane wing.

   * - **Automotive:**  
        In electric vehicles, where e-motors and battery electrochemistry create complex intersections between mechanical, chemical, and electrical engineering, CFD allows us to conduct detailed thermal studies throughout the multiphysics system. This can help engineers predict how efficiently the motor is cooled and reduce battery thermal runaway that can cause fires. Key applications include gearbox lubrication, autonomous sensors, aeroacoustics, external aerodynamics, battery modeling, and electric motor cooling.
     - .. image:: /static/automotive-cfd-car-fluent.png
          :width: 100%
          :alt: A Driver model solved using the Ansys Fluent GPU solver.
     
   * - **New Energy:**  
        As an enabler for decarbonization, hydrogen is a valuable fuel in creating a cleaner planet. CFD allows us to model the full hydrogen value chain—from production to storage, transportation, and consumption. CFD can conduct exploratory studies to learn how hydrogen and other alternative fuels can be used in conventional engines and determine the efficacy of alternative fuel options. Key applications include PEM electrolysis, hydrogen production, transportation, storage, and consumption, and fuel cell utilization.
     - .. image:: /static/new-energy-combustion-model.png
          :width: 100%
          :alt: A combustion study performed in Ansys Fluent

   * - **Healthcare:** 
        In the biomedical field, CFD can analyze fluid flows in the human body, such as blood flow through the circulatory system and airflow through the respiratory system. It can also be used to speed the development of medical devices and evaluate the potential efficacy of new medications. Key applications include cardiovascular flow, respiratory system, biopharmaceuticals.
       
     - .. raw:: html

          <div style="width: 100%; margin: 0 auto;">
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
              <iframe src="https://play.vidyard.com/ugXaP35Xm4mvNQBYoqsVJG" 
                      frameborder="0" allowfullscreen
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
              </iframe>
            </div>
          </div>

How Computational Fluid Dynamics Works
-------------
There are many different approaches to solving fluid flow on a computer. Before you start, you need to determine what methodology you will use at a high level, i.e., what governing equations will be solved. This choice will narrow down which computational approaches are available. Assuming a continuum approach is chosen (which is quite common), there are essentially 3 steps. 

First, the fluid flow domain (the continuous region to be calculated), is identified (typically represented by a CAD model). Then, a mesh is applied to dissect the domain into well-defined cells. Finally, the discretized version of the governing fluid equations is solved by the computer within each cell. In the context of high-performance computing (HPC), an optional step is assigning different cell groups to different computers for parallel processing. 


References
----------
- https://www.ansys.com/simulation-topics/what-is-computational-fluid-dynamics

