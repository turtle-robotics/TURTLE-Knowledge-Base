/* skill-tree.js — Interactive prerequisite map for TURTLE Robotics Knowledge Base
 * Depends on: Cytoscape.js (loaded from CDN before this script)
 * Data: _static/skill-tree.json
 */
(function () {
  'use strict';

  // Active level filter (null = none); shared between hover and click handlers
  let activeLevel = null;

  // ── Track colour palette (mirrored in skill-tree.css legend chips) ──────────
  const TRACKS = {
    software:    { label: 'Software',      color: '#4a78ad' },
    mechanical:  { label: 'Mechanical',    color: '#2e8b57' },
    electronics: { label: 'Electronics',   color: '#c07830' },
    theory:      { label: 'Theory & Math', color: '#7b5ea7' },
    systems:     { label: 'Systems',       color: '#2e8080' }
  };

  // ── Level labels (5 = innermost / foundation, 1 = outermost / mastery) ──────
  const LEVELS = {
    5: 'Foundation',
    4: 'Beginner',
    3: 'Intermediate',
    2: 'Advanced',
    1: 'Mastery'
  };

  // ── Build legend DOM ─────────────────────────────────────────────────────────
  function buildLegend() {
    const trackEl = document.getElementById('skill-tree-legend');
    if (trackEl) {
      trackEl.innerHTML = Object.entries(TRACKS).map(([, t]) =>
        `<div class="st-legend-item">` +
          `<span class="st-dot" style="background:${t.color}"></span>` +
          `<span>${t.label}</span>` +
        `</div>`
      ).join('');
    }

    const levelEl = document.getElementById('skill-tree-levels');
    if (levelEl) {
      levelEl.innerHTML = [5, 4, 3, 2, 1].map(lvl =>
        `<div class="st-legend-item st-level-filter" data-level="${lvl}" title="Click to highlight ${LEVELS[lvl]} skills">` +
          `<span class="st-lvl-chip st-lvl-${lvl}">${lvl}</span>` +
          `<span>${LEVELS[lvl]}</span>` +
        `</div>`
      ).join('');
    }
  }

  // ── Build Cytoscape stylesheet ───────────────────────────────────────────────
  function buildStylesheet() {
    const base = [
      {
        selector: 'node',
        style: {
          label:                'data(label)',
          'text-valign':        'center',
          'text-halign':        'center',
          'text-wrap':          'wrap',
          'text-max-width':     '76px',
          'font-size':          '11px',
          'font-weight':        '600',
          color:                '#ffffff',
          'text-outline-width': 1.5,
          width:                '92px',
          height:               '44px',
          shape:                'roundrectangle',
          'border-width':        2,
          'border-color':       'rgba(255,255,255,0.3)',
          cursor:               'pointer',
          'overlay-opacity':     0,
          'transition-property': 'opacity, border-width, border-color',
          'transition-duration': '150ms'
        }
      },
      {
        selector: 'node.hovered',
        style: {
          'border-color': '#F3D127',
          'border-width':  3.5,
          'z-index':       10
        }
      },
      {
        selector: 'node.dimmed',
        style: { opacity: 0.15 }
      },
      {
        // Hub node — centre origin / entry point
        selector: 'node[id = "__hub__"]',
        style: {
          label:                'Getting\nStarted',
          width:                100,
          height:               100,
          shape:                'ellipse',
          'background-color':   '#1B2538',
          'border-color':       '#F3D127',
          'border-width':        3,
          'text-outline-color': '#1B2538',
          'font-size':          '12px',
          'font-weight':        '700',
          'z-index':            20,
          cursor:               'pointer'
        }
      },
      {
        // Hub never dims
        selector: 'node[id = "__hub__"].dimmed',
        style: { opacity: 1 }
      },
      {
        selector: 'edge',
        style: {
          'curve-style':          'bezier',
          'target-arrow-shape':   'triangle',
          'arrow-scale':           0.9,
          'line-color':           '#c0c0c0',
          'target-arrow-color':   '#c0c0c0',
          width:                   1.5,
          opacity:                 0.55,
          'overlay-opacity':       0
        }
      },
      {
        selector: 'edge.hovered',
        style: {
          'line-color':         '#F3D127',
          'target-arrow-color': '#F3D127',
          width:                 2.5,
          opacity:               1,
          'z-index':             5
        }
      },
      {
        selector: 'edge.dimmed',
        style: { opacity: 0.06 }
      },
      {
        // Hub spokes — subtle, non-directional guide lines
        selector: 'edge[source = "__hub__"]',
        style: {
          'line-style':           'dashed',
          'line-color':           '#9aabb8',
          'target-arrow-shape':   'none',
          opacity:                 0.28,
          width:                   1
        }
      },
      {
        // Hub spokes stay subtle even when a neighbour is hovered
        selector: 'edge[source = "__hub__"].hovered',
        style: { opacity: 0.28 }
      },
      {
        selector: 'edge[source = "__hub__"].dimmed',
        style: { opacity: 0 }
      }
    ];

    // Per-track node colours
    const trackStyles = Object.entries(TRACKS).map(([track, info]) => ({
      selector: `node[track="${track}"]`,
      style: {
        'background-color':   info.color,
        'text-outline-color': info.color
      }
    }));

    // Per-level depth emphasis: Foundation (5) minimal → Mastery (1) bold
    const levelStyles = [
      { selector: 'node[level = 5]', style: {
          'border-width':   1.5,
          'border-color':   'rgba(255,255,255,0.2)',
          'shadow-opacity': 0
      }},
      { selector: 'node[level = 4]', style: {
          'border-width':    1.5,
          'border-color':    'rgba(255,255,255,0.3)',
          'shadow-blur':     5,
          'shadow-color':    '#000000',
          'shadow-offset-x': 0,
          'shadow-offset-y': 0,
          'shadow-opacity':  0.2
      }},
      { selector: 'node[level = 3]', style: {
          'border-width':    2.5,
          'border-color':    'rgba(255,255,255,0.5)',
          'shadow-blur':     9,
          'shadow-color':    '#000000',
          'shadow-offset-x': 0,
          'shadow-offset-y': 0,
          'shadow-opacity':  0.35
      }},
      { selector: 'node[level = 2]', style: {
          'border-width':    3,
          'border-color':    'rgba(255,255,255,0.75)',
          'shadow-blur':     14,
          'shadow-color':    '#000000',
          'shadow-offset-x': 0,
          'shadow-offset-y': 0,
          'shadow-opacity':  0.5
      }},
      { selector: 'node[level = 1]', style: {
          'border-width':    3.5,
          'border-color':    '#F3D127',
          'shadow-blur':     20,
          'shadow-color':    '#000000',
          'shadow-offset-x': 0,
          'shadow-offset-y': 0,
          'shadow-opacity':  0.65
      }}
    ];

    return [...base, ...trackStyles, ...levelStyles];
  }

  // ── Track cluster overlay (SVG ellipses, one per discipline) ─────────────────
  function createTrackOverlay(cy) {
    const container = document.getElementById('cy');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText =
      'position:absolute;top:0;left:0;width:100%;height:100%;' +
      'pointer-events:none;transition:opacity 0.2s;';
    container.appendChild(svg);

    const ellipses = {};
    Object.entries(TRACKS).forEach(function ([track, info]) {
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
      el.setAttribute('fill',             info.color);
      el.setAttribute('fill-opacity',     '0.09');
      el.setAttribute('stroke',           info.color);
      el.setAttribute('stroke-width',     '1.5');
      el.setAttribute('stroke-opacity',   '0.28');
      el.setAttribute('stroke-dasharray', '6 4');
      svg.appendChild(el);
      ellipses[track] = el;
    });

    const PAD = 52;

    function redraw() {
      Object.entries(TRACKS).forEach(function ([track]) {
        const nodes = cy.nodes('[track="' + track + '"]');
        const el    = ellipses[track];
        if (!nodes.length) { el.setAttribute('rx', 0); return; }

        const bb = nodes.renderedBoundingBox({ includeLabels: false, includeOverlays: false });
        el.setAttribute('cx', (bb.x1 + bb.x2) / 2);
        el.setAttribute('cy', (bb.y1 + bb.y2) / 2);
        el.setAttribute('rx', (bb.x2 - bb.x1) / 2 + PAD);
        el.setAttribute('ry', (bb.y2 - bb.y1) / 2 + PAD);
      });
    }

    cy.on('render', redraw);
    cy.on('mouseover', 'node', function () { svg.style.opacity = '0.3'; });
    cy.on('mouseout',  'node', function () { svg.style.opacity = '1';   });
  }

  // ── Initialise Cytoscape instance ────────────────────────────────────────────
  function initCytoscape(elements) {
    const container = document.getElementById('cy');
    const tooltip   = document.getElementById('cy-tooltip');

    // ── Radial preset layout ──────────────────────────────────────────────────
    // Single hub at (0,0); all other nodes expand outward.
    // Angle  = track sector — 72° per discipline, arranged to maximise separation
    //          between "similar" pairs (software/systems = 144° apart,
    //          mechanical/electronics = 144° apart).
    // Radius = skill level  (level 5 Foundation = innermost, level 1 Mastery = outermost).
    // Siblings in the same track+level fan out within their sector; the spread is
    // derived from the arc length needed to avoid node overlap at each radius.

    const TRACK_SECTOR = {
      theory:      -Math.PI / 2,                         // top         (0°)
      software:    -Math.PI / 2 + (2 * Math.PI / 5),    // upper-right (72°)
      mechanical:  -Math.PI / 2 + (4 * Math.PI / 5),    // lower-right (144°)
      systems:     -Math.PI / 2 + (6 * Math.PI / 5),    // lower-left  (216°)
      electronics: -Math.PI / 2 + (8 * Math.PI / 5)     // upper-left  (288°)
    };

    // Radii chosen so that even the widest level-slot (software L4, 4 nodes)
    // fits within its 72° sector without overlap.
    const LEVEL_RADIUS = { 5: 210, 4: 340, 3: 490, 2: 630, 1: 760 };
    const SECTOR_HALF  = Math.PI / 5;   // 36° — half of 72°
    const MIN_ARC      = 108;           // min centre-to-centre arc (node 92px + 16px gap)

    // Group node IDs by track → level
    const groups = {};
    elements.forEach(function (el) {
      if (!el.data || el.data.source) return;
      const { id, track, level } = el.data;
      if (!groups[track]) groups[track] = {};
      if (!groups[track][level]) groups[track][level] = [];
      groups[track][level].push(id);
    });

    // Assign radial positions
    const presetPos = { '__hub__': { x: 0, y: 0 } };
    Object.entries(groups).forEach(function ([track, levelMap]) {
      const sectorAngle = TRACK_SECTOR[track];
      if (sectorAngle === undefined) return;
      Object.entries(levelMap).forEach(function ([lvl, ids]) {
        const r = LEVEL_RADIUS[parseInt(lvl, 10)] || 400;
        const n = ids.length;
        ids.forEach(function (id, i) {
          let angle;
          if (n === 1) {
            angle = sectorAngle;
          } else {
            // natural half-spread to avoid overlap; capped at 85% of sector half
            const naturalHalf = (n - 1) * MIN_ARC / (2 * r);
            const halfSpread  = Math.min(SECTOR_HALF * 0.85, naturalHalf);
            angle = sectorAngle - halfSpread + (2 * halfSpread / (n - 1)) * i;
          }
          presetPos[id] = { x: r * Math.cos(angle), y: r * Math.sin(angle) };
        });
      });
    });

    // Synthetic hub node + spoke edges to every level-5 foundation node
    const hubNode  = { data: { id: '__hub__', label: 'Getting\nStarted', track: '__hub__', level: 6 } };
    const spokeEdges = elements
      .filter(function (el) { return el.data && !el.data.source && el.data.level === 5; })
      .map(function (el, i) {
        return { data: { id: '__spoke' + i, source: '__hub__', target: el.data.id } };
      });

    const cy = cytoscape({
      container,
      elements: [hubNode, ...spokeEdges, ...elements],
      style:    buildStylesheet(),
      layout: {
        name:              'preset',
        positions:          function (node) { return presetPos[node.id()]; },
        animate:            true,
        animationDuration:  700,
        animationEasing:    'ease-out-cubic',
        fit:                true,
        padding:            50
      },
      minZoom:             0.15,
      maxZoom:             4.0,
      wheelSensitivity:    0.2,
      boxSelectionEnabled: false,
      autounselectify:     true
    });

    // ── Hover: highlight neighbourhood, dim everything else ─────────────────
    cy.on('mouseover', 'node', function (evt) {
      const node = evt.target;
      if (node.id() === '__hub__') return;   // hub has no meaningful neighbourhood
      cy.elements().addClass('dimmed');
      cy.nodes('#__hub__').removeClass('dimmed');  // hub stays visible
      node.removeClass('dimmed').addClass('hovered');
      // Exclude hub spokes from the highlight ring
      const edges = node.connectedEdges()
        .filter(function (e) { return e.source().id() !== '__hub__'; });
      edges.removeClass('dimmed').addClass('hovered');
      edges.connectedNodes().removeClass('dimmed');
    });

    cy.on('mouseout', 'node', function () {
      cy.elements().removeClass('dimmed hovered');
      if (activeLevel !== null) {
        cy.elements().addClass('dimmed');
        cy.nodes('[level = ' + activeLevel + ']').removeClass('dimmed');
        cy.nodes('#__hub__').removeClass('dimmed');
      }
    });

    // ── Tooltip: follow cursor inside canvas ─────────────────────────────────
    cy.on('mouseover', 'node', function (evt) {
      if (!tooltip) return;
      const d = evt.target.data();
      if (d.id === '__hub__') return;   // no tooltip for hub
      tooltip.innerHTML =
        `<div class="tt-title">${d.label}</div>` +
        `<div class="tt-body">${d.description}</div>` +
        `<div class="tt-cta">${d.external ? '&#8599; External resource' : '&#8594; Knowledge base page'}</div>`;
      tooltip.style.display = 'block';
    });

    cy.on('mousemove', function (evt) {
      if (!tooltip || tooltip.style.display === 'none') return;
      const p = evt.renderedPosition;
      const w = container.clientWidth;
      const h = container.clientHeight;
      let x = p.x + 16;
      let y = p.y - 14;
      if (x + 240 > w) x = p.x - 250;
      if (y + 130 > h) y = p.y - 140;
      tooltip.style.left = x + 'px';
      tooltip.style.top  = y + 'px';
    });

    cy.on('mouseout', 'node', function () {
      if (tooltip) tooltip.style.display = 'none';
    });

    // ── Click: navigate to linked resource (hub resets view) ─────────────────
    cy.on('tap', 'node', function (evt) {
      const d = evt.target.data();
      if (d.id === '__hub__') { window.location.href = 'getting_started.html'; return; }
      if (!d.url) return;
      if (d.external) {
        window.open(d.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = d.url;
      }
    });

    // ── Zoom / pan controls ──────────────────────────────────────────────────
    function zoomBy(factor) {
      cy.zoom({
        level:            cy.zoom() * factor,
        renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 }
      });
    }

    const btnReset = document.getElementById('st-reset');
    const btnIn    = document.getElementById('st-zoom-in');
    const btnOut   = document.getElementById('st-zoom-out');

    if (btnReset) btnReset.addEventListener('click', function () { cy.fit(undefined, 50); });
    if (btnIn)    btnIn.addEventListener('click',    function () { zoomBy(1.3); });
    if (btnOut)   btnOut.addEventListener('click',   function () { zoomBy(1 / 1.3); });

    createTrackOverlay(cy);
    setupLevelFilter(cy);

    return cy;
  }

  // ── Level-legend click filter ─────────────────────────────────────────────
  function setupLevelFilter(cy) {
    document.querySelectorAll('.st-level-filter').forEach(function (item) {
      item.addEventListener('click', function () {
        const lvl = parseInt(item.dataset.level, 10);
        if (activeLevel === lvl) {
          activeLevel = null;
          cy.elements().removeClass('dimmed hovered');
          document.querySelectorAll('.st-level-filter').forEach(function (el) {
            el.classList.remove('active');
          });
        } else {
          activeLevel = lvl;
          document.querySelectorAll('.st-level-filter').forEach(function (el) {
            el.classList.remove('active');
          });
          item.classList.add('active');
          cy.elements().addClass('dimmed');
          cy.nodes('[level = ' + lvl + ']').removeClass('dimmed');
          cy.nodes('#__hub__').removeClass('dimmed');
        }
      });
    });
  }

  // ── Entry point ──────────────────────────────────────────────────────────────
  function init() {
    if (!document.getElementById('cy')) return;

    buildLegend();

    fetch('_static/skill-tree.json')
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + r.statusText);
        return r.json();
      })
      .then(function (data) {
        initCytoscape([...data.nodes, ...data.edges]);
      })
      .catch(function (err) {
        const el = document.getElementById('cy');
        if (el) {
          el.style.cssText = 'display:flex;align-items:center;justify-content:center;';
          el.innerHTML =
            '<p style="color:#c0392b;padding:1.5rem;font-size:0.9rem">' +
            'Could not load skill tree data: ' + err.message + '</p>';
        }
        console.error('[skill-tree]', err);
      });
  }

  document.addEventListener('DOMContentLoaded', init);
}());
