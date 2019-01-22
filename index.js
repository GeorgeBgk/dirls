const fs = require('fs')
const path = require('path')

function dirls(dir) {
  const files = fs.readdirSync(dir)
  const output = []
  for (const file of files) {
    const stats = fs.statSync(path.join(dir, file))
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
      type,
      stats
    })
  }

  return output
}

module.exports = dirls
