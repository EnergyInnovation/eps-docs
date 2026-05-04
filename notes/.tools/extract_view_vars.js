// Extract variable names from a Vensim sketch view section.
// Usage: node extract_view_vars.js <mdl-path> <view-name>
// Reads as latin1 (Windows-1252-safe for ASCII content) and emits one variable per line.

const fs = require('fs');
const path = process.argv[2];
const viewName = process.argv[3];
if (!path || !viewName) {
  console.error('usage: node extract_view_vars.js <mdl-path> <view-name>');
  process.exit(2);
}
const buf = fs.readFileSync(path);
const text = buf.toString('latin1');
const lines = text.split(/\r?\n/);

let inView = false;
const seen = new Set();
const order = [];

for (const line of lines) {
  // sketch view header
  if (line.startsWith('*')) {
    if (inView) break; // hit next view
    if (line.slice(1).trim() === viewName) inView = true;
    continue;
  }
  if (!inView) continue;
  // a new sketch section dump means we left the view's sketch
  if (line.startsWith('\\\\\\---///')) break;
  // variable record: `10,id,NAME,x,y,...`
  if (line.startsWith('10,')) {
    const parts = line.split(',');
    if (parts.length >= 3) {
      const name = parts[2];
      if (!seen.has(name)) {
        seen.add(name);
        order.push(name);
      }
    }
  }
}
for (const n of order) console.log(n);
