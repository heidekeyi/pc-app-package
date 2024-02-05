import { pageRoute } from './page/pageRoute'

const elements = ['element']

function initRoute(it) {
  for (const elem of elements) {
    const Element = it[elem]
    if (Element) {
      it[elem] = <Element />
    }
  }
  const list = it.children || []
  for (const it of list) {
    initRoute(it)
  }
}

initRoute(pageRoute)

export const routes = [pageRoute]
