import scss from './FE3RPage.module.scss'
import { IconSport, IconApps, IconHome } from '../assets/iconfont/IconFont'
import { fe3rItemRoute } from './item/fe3rItemRoute'
import { fe3rRoleRoute } from './role/fe3rRoleRoute'
import { fe3rIndexRoute } from './index/fe3rIndexRoute'
import { Outlet, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'

export function FE3RPage() {
  const ob = useMemo(() => {
    return {
      index: fe3rIndexRoute.path,
      role: fe3rRoleRoute.path,
      item: fe3rItemRoute.path
    }
  }, [])
  const list = useMemo(() => {
    return [
      [IconHome, ob.index],
      [IconSport, ob.role],
      [IconApps, ob.item]
    ]
  }, [])
  const [path, setPath] = useState(ob.index)
  const navigate = useNavigate()
  const onClick = (e) => {
    const name = e.target.id
    if (name === path || !ob.hasOwnProperty(name)) {
      return
    }
    setPath(name)
    navigate(name)
  }
  return (
    <div className={scss.page}>
      <div className={scss.bar}>
        <div className={scss.list} onClick={onClick}>
          {list.map((it) => {
            const [Element, url] = it
            const cls = url === path ? scss.disable : scss.enable
            return <Element id={url} key={url} className={cls} />
          })}
        </div>
      </div>
      <div className={scss.main}>
        <Outlet />
      </div>
    </div>
  )
}
