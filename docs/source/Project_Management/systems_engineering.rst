Systems Engineering
===================

Requirement Flowdown
--------------------

Show how the high-level bullets from the proposal translate into subsystem allocations:

- Start with the “High-Level Requirements” list from the proposal section and number them as **R-1, R-2, ...**.
- Create a traceability matrix figure (Table 2) that mirrors the BOM structure introduced later in the PDR: requirements down the rows, subsystems across the columns, with ✔ marks where responsibility lives.
- Link each requirement to its verification method (analysis, test, inspection) so the later PDR Gantt figure has a clear driver for major milestones.

Architecture Trade Studies
---------------------------

The PDR explicitly calls out *Gantt Charts* and the *Bill of Materials (BOM)* as required visuals. Use them to ground the trade study narrative:

1. **Concept options.** Summarize two to three candidate architectures and embed a decision matrix (Table 3) listing the scoring criteria agreed upon during the proposal review.
2. **Schedule impact.** Reference the PDR Gantt chart figure to highlight critical-path differences between the options.
3. **Cost/mass impact.** Tie back to the BOM subsection: note which line items (or categories) shift across the concepts and what that does to budget or resource allocation.
4. **Selected baseline.** Finish with the rationale for the chosen concept and call out any risks that will carry into the Risk Management register.

Integration Planning
--------------------

Close the section by detailing how the selected architecture becomes an actionable plan:

- **Schedule alignment.** Point to the same PDR Gantt figure, but now break it down by integration builds (Build 0, Build 1, etc.) and identify the entrance/exit criteria for each.
- **Interface documentation.** Mention where interface control documents (ICDs) will live in the repo and which BOM line items they cover.
- **Verification assets.** Note any figures, benches, or simulators that must be prepared ahead of integration (reference Table 3 if those items already exist in the BOM).
- **Readiness for CDR.** State which integration milestones map to Critical Design Review entrance criteria so reviewers can see traceability from PDR commitments to the next gate.
