const fs = require('fs')
const path = require('path')
function dirls(dir) {
  let files = fs.readdirSync(dir)
  let output = []
  for (let i in files) {
    let file = files[i]
    let stats = fs.statSync(path.join(dir, file))
    let type = ''
    if (stats.isBlockDevice() || stats.isCharacterDevice()) {
      type = 'device'
    } else if (stats.isDirectory()) {
      type = 'directory'
    } else if (stats.isFIFO()) {
      type = 'FIFOpipe'
    } else if (stats.isFile()) {
      type = 'file'
    } else if (stats.isSocket()) {
      type = 'socket'
    } else if (stats.isSymbolicLink()) {
      type = 'symlink'
    } else {
      type = 'unknown'
    }
    output.push({
      name: file,
      type: type,
      stats: stats
    })
  }
  return output
}
module.exports = dirls