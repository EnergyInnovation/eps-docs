import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'path'
import lunr from 'lunr'

const docDirname = path.resolve('../src')
const indexPathname = path.join(docDirname, 'docindex.json')
const titlePathname = path.join(docDirname, 'doctitle.json')

// Return an array of filenames (excluding directories) in dirname.
// If the optional file extension (without the dot) is given, only return filenames with that extension.
async function filesInDir(dirname, ext = '') {
  let filenames = []
  let extname = ext ? `.${ext}` : ''
  try {
    let dirents = await readdir(dirname, { withFileTypes: true })
    for (let dirent of dirents) {
      if (dirent.isFile()) {
        if (!extname || path.extname(dirent.name) === extname) {
          filenames.push(dirent.name)
        }
      }
    }
  } catch (err) {
    console.error(err)
  }
  return filenames
}
// Read UTF-8 data from a file.
async function readDataFromFile(pathname) {
  let data = ''
  try {
    data = await readFile(pathname, 'utf8')
  } catch (err) {
    console.error(err.message)
  }
  return data
}
// Write UTF-8 data to a file.
async function writeDataToFile(pathname, data) {
  try {
    await writeFile(pathname, data, 'utf8')
  } catch (err) {
    console.error(err.message)
  }
}
// Scan a string for newline-terminated lines and return them in an array.
function getLines(data, term = '\n') {
  let lines = []
  let pos = 0
  let next = data.indexOf(term, pos)
  while (next >= 0) {
    let s = data.substring(pos, next + 1)
    lines.push(s)
    pos = next + 1
    next = data.indexOf(term, pos)
  }
  // If the final line is unterminated, then terminate it.
  if (pos < data.length) {
    let s = data.substring(pos) + term
    lines.push(s)
  }
  return lines
}
// Transform a line of Markdown into pure text.
function filter(line) {
  // Remove embedded images.
  const imgRegexp = /!\[[^\]]+\]\([^)]+\)/g
  for (let m of [...line.matchAll(imgRegexp)]) {
    line = line.replace(m[0], '')
  }
  // Replace each link with just the link text.
  const linkRegexp = /\[([^\]]+)\]\([^)]+\)/g
  for (let m of [...line.matchAll(linkRegexp)]) {
    line = line.replace(m[0], m[1])
  }
  // Replace each subscript text HTML with just the text.
  const subscriptHtmlRegexp = /<sub>([^<]+)<\/sub>/g
  for (let m of [...line.matchAll(subscriptHtmlRegexp)]) {
    line = line.replace(m[0], m[1])
  }
  return line
}
// Filter each line of the input file to an output string.
async function buildIndex() {
  let documents = []
  let docfiles = await filesInDir(docDirname, 'md')
  for (let docfile of docfiles) {
    let id = docfile.replace('.md', '')
    let title = ''
    let body = ''
    let inFrontMatter = false
    let docPathname = path.join(docDirname, docfile)
    let data = await readDataFromFile(docPathname)
    let lines = getLines(data)
    for (let line of lines) {
      if (line.startsWith('---')) {
        inFrontMatter = !inFrontMatter
      } else if (inFrontMatter) {
        let m = line.match(/title:\s*(.*)/)
        if (m) {
          title = m[1]
        }
      } else if (!inFrontMatter) {
        line = filter(line)
        if (line.trim().length > 0) {
          body += line
        }
      }
    }
    documents.push({ id, title, body })
  }
  return documents
}
async function main() {
  let documents = await buildIndex()
  let idx = lunr(function () {
    this.ref('id')
    this.field('title', { boost: 10 })
    this.field('body')
    // Including the position of search terms in the document doubles index size.
    // this.metadataWhitelist = ['position']
    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })
  writeDataToFile(indexPathname, JSON.stringify(idx))
  // Write an auxiliary JSON file with the document title for search result display.
  let docTitle = documents.map(d => ({ id: d.id, title: d.title }))
  writeDataToFile(titlePathname, JSON.stringify(docTitle))
}

main()
