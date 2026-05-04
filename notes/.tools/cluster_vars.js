// Inspect Vensim sketch-section coordinates for one view, to help structure
// screenshot recommendations. Three modes:
//   bbox   — print the bounding box that contains a list of named variables,
//            plus any on-canvas annotations (type-12 sketch records) inside it,
//            plus arrows whose endpoints both fall inside.
//   region — list every variable + annotation inside a given bounding box.
//   near   — list the K nearest variables to one named variable.
//
// Usage:
//   node cluster_vars.js bbox   <mdl> "<view>" "<var1>" "<var2>" ...
//   node cluster_vars.js region <mdl> "<view>" <x1> <y1> <x2> <y2>
//   node cluster_vars.js near   <mdl> "<view>" "<var>" [k]
//
// Reads as latin1 to handle Windows-1252 content. Coordinates are in Vensim
// canvas units exactly as stored in the .mdl sketch.

const fs = require('fs');

function loadView(mdlPath, viewName) {
  const text = fs.readFileSync(mdlPath, 'latin1');
  const lines = text.split(/\r?\n/);
  let inView = false;
  const vars = [];        // {id, name, x, y, w, h}
  const annotations = []; // {id, x, y, w, h, text}
  const arrows = [];      // {id, from, to}
  let pendingAnno = null;
  for (const line of lines) {
    if (line.startsWith('*')) {
      if (inView) break;
      if (line.slice(1).trim() === viewName) inView = true;
      continue;
    }
    if (!inView) continue;
    if (line.startsWith('\\\\\\---///')) break;
    if (pendingAnno) {
      pendingAnno.text = line;
      annotations.push(pendingAnno);
      pendingAnno = null;
      continue;
    }
    if (line.startsWith('10,')) {
      const p = line.split(',');
      vars.push({
        id: +p[1],
        name: p[2],
        x: +p[3], y: +p[4], w: +p[5], h: +p[6],
      });
    } else if (line.startsWith('12,')) {
      const p = line.split(',');
      pendingAnno = {
        id: +p[1],
        x: +p[3], y: +p[4], w: +p[5], h: +p[6],
        text: '',
      };
    } else if (line.startsWith('1,')) {
      const p = line.split(',');
      arrows.push({ id: +p[1], from: +p[2], to: +p[3] });
    }
  }
  return { vars, annotations, arrows };
}

function findVarsByName(view, names) {
  const out = [];
  const missed = [];
  for (const n of names) {
    const matches = view.vars.filter(v => v.name === n);
    if (matches.length === 0) missed.push(n);
    else out.push(...matches);
  }
  return { matches: out, missed };
}

function bboxOf(items, padding = 30) {
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (const it of items) {
    const halfW = (it.w || 75) / 2;
    const halfH = (it.h || 30) / 2;
    x1 = Math.min(x1, it.x - halfW);
    y1 = Math.min(y1, it.y - halfH);
    x2 = Math.max(x2, it.x + halfW);
    y2 = Math.max(y2, it.y + halfH);
  }
  return { x1: x1 - padding, y1: y1 - padding, x2: x2 + padding, y2: y2 + padding };
}

function inside(item, box) {
  return item.x >= box.x1 && item.x <= box.x2 && item.y >= box.y1 && item.y <= box.y2;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function cmd_bbox(mdl, viewName, names) {
  const view = loadView(mdl, viewName);
  const { matches, missed } = findVarsByName(view, names);
  if (missed.length) {
    console.error(`# Not found on view "${viewName}": ${missed.map(n => JSON.stringify(n)).join(', ')}`);
  }
  if (!matches.length) { console.error('# No matches on view'); process.exit(1); }
  const box = bboxOf(matches);
  console.log(`# View: ${viewName}`);
  console.log(`# Cited variables (${matches.length}):`);
  for (const v of matches) console.log(`  (${v.x}, ${v.y})  ${v.name}`);
  console.log(`# Bounding box (with 30u padding): x ∈ [${box.x1.toFixed(0)}, ${box.x2.toFixed(0)}]  y ∈ [${box.y1.toFixed(0)}, ${box.y2.toFixed(0)}]`);
  console.log(`#   width=${(box.x2 - box.x1).toFixed(0)}  height=${(box.y2 - box.y1).toFixed(0)}  aspect=${((box.x2 - box.x1) / Math.max(1, box.y2 - box.y1)).toFixed(2)}:1`);

  const containedVars = view.vars.filter(v => inside(v, box) && !matches.includes(v));
  if (containedVars.length) {
    console.log(`# Other variables inside this box (${containedVars.length}) — confirm they belong in the same screenshot:`);
    for (const v of containedVars) console.log(`  (${v.x}, ${v.y})  ${v.name}`);
  }

  const containedAnnos = view.annotations.filter(a => inside(a, box) && a.text && a.text.trim());
  if (containedAnnos.length) {
    console.log(`# On-canvas annotations inside this box (${containedAnnos.length}):`);
    for (const a of containedAnnos) console.log(`  (${a.x}, ${a.y})  ${a.text.slice(0, 90)}`);
  }
}

function cmd_region(mdl, viewName, x1, y1, x2, y2) {
  const view = loadView(mdl, viewName);
  const box = { x1: Math.min(x1, x2), y1: Math.min(y1, y2), x2: Math.max(x1, x2), y2: Math.max(y1, y2) };
  const containedVars = view.vars.filter(v => inside(v, box));
  console.log(`# Variables inside region (${containedVars.length}):`);
  for (const v of containedVars) console.log(`  (${v.x}, ${v.y})  ${v.name}`);
  const containedAnnos = view.annotations.filter(a => inside(a, box) && a.text && a.text.trim());
  if (containedAnnos.length) {
    console.log(`# Annotations inside region (${containedAnnos.length}):`);
    for (const a of containedAnnos) console.log(`  (${a.x}, ${a.y})  ${a.text.slice(0, 90)}`);
  }
}

function cmd_near(mdl, viewName, name, k = 8) {
  const view = loadView(mdl, viewName);
  const target = view.vars.find(v => v.name === name);
  if (!target) { console.error(`# "${name}" not found on view "${viewName}"`); process.exit(1); }
  const others = view.vars.filter(v => v !== target);
  others.sort((a, b) => distance(a, target) - distance(b, target));
  console.log(`# Anchor: (${target.x}, ${target.y})  ${target.name}`);
  console.log(`# Nearest ${k} variables on the same view:`);
  for (const v of others.slice(0, k)) {
    console.log(`  d=${distance(v, target).toFixed(0).padStart(5)}  (${v.x}, ${v.y})  ${v.name}`);
  }
}

const [, , subcmd, mdl, viewName, ...rest] = process.argv;
if (!subcmd || !mdl || !viewName) {
  console.error('usage:');
  console.error('  node cluster_vars.js bbox   <mdl> "<view>" "<var1>" "<var2>" ...');
  console.error('  node cluster_vars.js region <mdl> "<view>" <x1> <y1> <x2> <y2>');
  console.error('  node cluster_vars.js near   <mdl> "<view>" "<var>" [k]');
  process.exit(2);
}
if (subcmd === 'bbox')   cmd_bbox(mdl, viewName, rest);
else if (subcmd === 'region') cmd_region(mdl, viewName, +rest[0], +rest[1], +rest[2], +rest[3]);
else if (subcmd === 'near')   cmd_near(mdl, viewName, rest[0], rest[1] ? +rest[1] : 8);
else { console.error(`Unknown subcommand: ${subcmd}`); process.exit(2); }
