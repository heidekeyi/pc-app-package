function joinPath(...paths) {
  return require('path').join(...paths)
}

function joinUrl(url, options) {
  return require('url').format(url, options)
}

function joinUrlFile(...paths) {
  return joinUrl({
    pathname: joinPath(...paths),
    protocol: 'file:',
    slashes: true
  })
}

module.exports = {
  joinPath,
  joinUrlFile,
  joinUrl
}
