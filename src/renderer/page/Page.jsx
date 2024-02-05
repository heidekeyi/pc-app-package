import { Outlet, useNavigate } from 'react-router-dom'
import scss from './Page.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { pageChange } from './pageSlice'

export function Page() {
  const navigate = useNavigate()
  const state = useSelector((state) => state.page)
  const dispatch = useDispatch()
  const onClick = (e) => {
    e.stopPropagation()
    const it = state.list.find((it) => it.id === e.target.id)
    if (!it || state.path === it.path) {
      return
    }
    dispatch(pageChange(it.path))
    navigate(it.path)
  }
  return (
    <div className={scss.page}>
      <div className={scss.list} onClick={onClick}>
        {state.list.map((it) => {
          return (
            <div className={scss.it} key={it.id}>
              <img id={it.id} className={scss.img} src={it.banner} alt={it.title} />
            </div>
          )
        })}
      </div>
      <div className={scss.content}>
        <Outlet />
      </div>
    </div>
  )
}
