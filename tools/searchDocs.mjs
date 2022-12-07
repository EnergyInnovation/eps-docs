import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'path'
import lunr from 'lunr'

const docDirname = path.resolve('../src')
const indexPathname = path.join(docDirname, 'docindex.json')
const titlePathname = path.join(docDirname, 'doctitle.json')

function bail(msg) {
  console.error(msg)
  process.exit(1)
}
function help() {
  bail('usage: searchDocs {search term}')
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
async function main() {
  let argv = process.argv.slice(2)
  let q = argv[0]
  if (!q) {
    help()
  }
  let data
  data = await readDataFromFile(indexPathname)
  let idx = lunr.Index.load(JSON.parse(data))
  data = await readDataFromFile(titlePathname)
  let titles = JSON.parse(data)
  let results = idx.search(q)
  for (let result of results) {
    let title = titles.find(d => d.id === result.ref).title
    console.log(`[${result.ref}] ${title}`)
  }
}

main()
