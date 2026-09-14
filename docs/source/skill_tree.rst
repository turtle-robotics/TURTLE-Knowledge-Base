Robotics Skill Tree
==========
.. raw:: html

   <div class="skill-tree-page">
     <div class="skill-tree-toolbar">
       <button class="st-btn" id="st-reset" title="Fit all nodes to view">&#8635;&nbsp;Reset</button>
       <button class="st-btn" id="st-zoom-in"  title="Zoom in">&#43;&nbsp;Zoom&nbsp;In</button>
       <button class="st-btn" id="st-zoom-out" title="Zoom out">&#8722;&nbsp;Zoom&nbsp;Out</button>
       <span class="st-hint">Scroll&nbsp;to&nbsp;zoom &nbsp;·&nbsp; Drag&nbsp;to&nbsp;pan &nbsp;·&nbsp; Click&nbsp;a&nbsp;node&nbsp;to&nbsp;open</span>
     </div>
     <div id="cy"></div>
     <div id="cy-tooltip" class="cy-tooltip"></div>
     <div class="skill-tree-footer">
       <span class="st-section-label">Track</span>
       <div id="skill-tree-legend"  class="st-legend-group"></div>
       <span class="st-section-label" style="margin-left:1rem">Depth</span>
       <div id="skill-tree-levels"  class="st-legend-group"></div>
     </div>
   </div>

.. raw:: html

   <script src="https://unpkg.com/cytoscape@3.27.0/dist/cytoscape.min.js"></script>
   <script src="_static/skill-tree.js"></script>

----
