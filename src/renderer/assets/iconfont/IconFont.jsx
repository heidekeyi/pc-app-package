import PropTypes from 'prop-types'
import scss from './IconFont.module.scss'

function initElement(clsName) {
  function Element(props) {
    let { className, style, id, onClick } = props
    const list = [scss.iconfont, clsName]
    if (className) {
      list.push(className)
    }
    className = list.join(' ')
    return <i className={className} id={id} onClick={onClick} style={style} />
  }

  Element.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    onClick: PropTypes.func
  }
  return Element
}

export const IconTree = initElement(scss.tree)
export const IconHome = initElement(scss.home)
export const IconHurry = initElement(scss.hurry)
export const IconWaring = initElement(scss.waring)
export const IconSucceed = initElement(scss.succeed)
export const IconStar = initElement(scss.star)
export const IconError = initElement(scss.error)
export const IconClose = initElement(scss.close)
export const IconMin = initElement(scss.min)
export const IconMax = initElement(scss.max)
export const IconRole = initElement(scss.role)
export const IconMoney = initElement(scss.money)
export const IconJapanese = initElement(scss.japanese)
export const IconChinese = initElement(scss.chinese)
export const IconSport = initElement(scss.sport)
export const IconTime = initElement(scss.time)
export const IconItem = initElement(scss.item)
export const IconSearch = initElement(scss.search)
export const IconRight = initElement(scss.right)
export const IconDown = initElement(scss.down)
export const IconUp = initElement(scss.up)
export const IconLeft = initElement(scss.left)
export const IconApps = initElement(scss.apps)
export const IconMenu = initElement(scss.menu)

export const iconfontList = [
  {
    Element: IconTree,
    name: 'IconTree'
  },
  {
    Element: IconHome,
    name: 'IconHome'
  },
  {
    Element: IconHurry,
    name: 'IconHurry'
  },
  {
    Element: IconWaring,
    name: 'IconWaring'
  },
  {
    Element: IconSucceed,
    name: 'IconSucceed'
  },
  {
    Element: IconStar,
    name: 'IconStar'
  },
  {
    Element: IconError,
    name: 'IconError'
  },
  {
    Element: IconClose,
    name: 'IconClose'
  },
  {
    Element: IconMin,
    name: 'IconMin'
  },
  {
    Element: IconMax,
    name: 'IconMax'
  },
  {
    Element: IconRole,
    name: 'IconRole'
  },
  {
    Element: IconMoney,
    name: 'IconMoney'
  },
  {
    Element: IconJapanese,
    name: 'IconJapanese'
  },
  {
    Element: IconChinese,
    name: 'IconChinese'
  },
  {
    Element: IconSport,
    name: 'IconSport'
  },
  {
    Element: IconTime,
    name: 'IconTime'
  },
  {
    Element: IconItem,
    name: 'IconItem'
  },
  {
    Element: IconSearch,
    name: 'IconSearch'
  },
  {
    Element: IconRight,
    name: 'IconRight'
  },
  {
    Element: IconDown,
    name: 'IconDown'
  },
  {
    Element: IconUp,
    name: 'IconUp'
  },
  {
    Element: IconLeft,
    name: 'IconLeft'
  },
  {
    Element: IconApps,
    name: 'IconApps'
  },
  {
    Element: IconMenu,
    name: 'IconMenu'
  }
]
