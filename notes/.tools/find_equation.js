// Print the equation block(s) for one variable from a Vensim .mdl file.
// Handles multiple subscript-split definitions (e.g., :EXCEPT: pattern).
// Reads as latin1 so Windows-1252 content survives.
// Usage: node find_equation.js "<variable_name>" <mdl_path>
const fs = require('fs');
const [, , name, path] = process.argv;
if (!name || !path) {
  console.error('usage: node find_equation.js "<variable_name>" <mdl_path>');
  process.exit(2);
}
const text = fs.readFileSync(path, 'latin1');
const lines = text.split(/\r?\n/);
const escaped = name.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
// Equation start: line begins with the variable name followed by [, =, or : (for :INTERPOLATE: etc.)
const startRe = new RegExp(`^${escaped}(\\[|=|\\s*:)`);
const out = [];
let inEq = false;
let blockHadContent = false;
for (const line of lines) {
  if (!inEq) {
    if (startRe.test(line)) {
      inEq = true;
      blockHadContent = false;
      out.push(line);
    }
  } else {
    out.push(line);
    if (line === '') {
      // Blank line ends the equation block.
      inEq = false;
      if (blockHadContent) out.push('');
    } else {
      blockHadContent = true;
    }
  }
}
process.stdout.write(out.join('\n'));
