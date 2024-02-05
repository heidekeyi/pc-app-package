import scss from './IconPage.module.scss'
import { iconfontList } from '../assets/iconfont/IconFont'

export function IconPage() {
  return (
    <div className={scss.page}>
      <div className={scss.list}>
        {iconfontList.map((it) => {
          const { Element, name } = it
          return (
            <div key={name} className={scss.it}>
              <Element className={scss.icon} />
              <span className={scss.text}>{name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
