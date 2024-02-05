const fs = require('fs').promises
const pathnameCSS = './iconfont.css'
const pathnameSCSS = './IconFont.module.scss'
const pathnameComponent = './IconFont.jsx'

function parseCSS(str) {
  return str
    .split('}')
    .filter((it) => it.trim().length > 0)
    .map((it) => `${it}}`)
    .map((item) => {
      if (item.match(/^\s*\.iconfont/)) {
        item = item
          .split(';')
          .filter((it) => it.trim().length > 0)
          .filter((it) => !it.endsWith('font-size: 16px'))
          .join(';')
      }
      return item
    })
}

function initElementNames(list) {
  return list
    .filter((it) => it.match(/^\s*\.icon-/))
    .map((it) => {
      const res = it.match(/^\s*\.icon-(\w+):/)
      return res.length > 0 ? res[1] : ''
    })
}

function initHeader() {
  return `import PropTypes from 'prop-types'
import scss from '${pathnameSCSS}'

function initElement(clsName) {
  function Element(props) {
    let { className, style, id, key, onClick } = props
    const list = [scss.iconfont, clsName]
    if (className) {
      list.push(className)
    }
    className = list.join(' ')
    return <i className={className} id={id} key={key} onClick={onClick} style={style} />
  }

  Element.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    key: PropTypes.string,
    onClick: PropTypes.func
  }
  return Element
}
`
}

fs.readFile(pathnameCSS)
  .then((buffer) => {
    const str = buffer.toString()
    const list = parseCSS(str)
    return new Promise((resolve) => {
      fs.writeFile(pathnameSCSS, list.join('')).then(() => {
        resolve(initElementNames(list))
      })
    })
  })
  .then(
    (list) =>
      new Promise((resolve) => {
        // console.log(list.join(','))
        const str = initHeader()
        fs.writeFile(pathnameComponent, str).then(() => resolve(list))
      })
  )
  .then(
    (list) =>
      new Promise((resolve) => {
        const str = list
          .map((it) => {
            return `.${it} {
  @extend .iconfont;
  @extend .icon-${it};
}`
          })
          .join('\n\n')
        const s = ['\n', str, ''].join('\n')
        fs.appendFile(pathnameSCSS, s).then(() => resolve(list))
      })
  )
  .then(
    (list) =>
      new Promise((resolve) => {
        const lt = list
          .map((it) => `${it.charAt(0).toUpperCase()}${it.slice(1)}`)
          .map((it) => `Icon${it}`)
          .map((it, ix) => {
            return {
              name: it,
              str: `export const ${it} = initElement(scss.${list[ix]})`
            }
          })
        const str = lt.map((it) => it.str).join('\n')
        const s = ['', str, ''].join('\n')
        fs.appendFile(pathnameComponent, s).then(() => resolve(lt))
      })
  )
  .then(
    (list) =>
      new Promise((resolve) => {
        const str = list
          .map((it) => it.name)
          .map((it) => {
            return `  {
    Element: ${it},
    name: '${it}'
  }`
          })
          .join(',\n')
        const s = ['\nexport const iconfontList = [', str, ']', ''].join('\n')
        fs.appendFile(pathnameComponent, s).then(() => resolve(list))
      })
  )
  .then(() => {
    console.log('init module success ^__^')
  })

console.log([''].filter((it) => it).length)
