import scss from './IndexPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pageChange } from '../page/pageSlice'

export function IndexPage() {
  const navigate = useNavigate()
  const state = useSelector((state) => state.page)
  const dispatch = useDispatch()
  const onClick = (e) => {
    e.stopPropagation()
    const it = state.list.find((it) => it.id === e.target.id)
    if (!it) {
      return
    }
    navigate(it.path)
    dispatch(pageChange(it.path))
  }
  return (
    <div className={scss.page}>
      <div className={scss.list} onClick={onClick}>
        {state.list
          .filter((it) => it.path !== state.path)
          .map((it) => (
            <img src={it.banner} id={it.id} key={it.id} className={scss.it} alt={it.title} />
          ))}
      </div>
    </div>
  )
}
