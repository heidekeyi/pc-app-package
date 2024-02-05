import { Page } from './Page'
import { indexRoute } from '../page-index/indexRoute'
import { iconRoute } from '../page-icon/iconRoute'
import { dailyRoute } from '../page-daily/dailyRoute'
import { chineseRoute } from '../page-chinese/chineseRoute'
import { japaneseRoute } from '../page-japanese/japaneseRoute'
import { fe1rRoute } from '../page-fe-1r/fe1rRoute'
import { fe3rRoute } from '../page-fe-3r/fe3rRoute'

export const pageRoute = {
  path: '/',
  element: Page,
  children: [
    {
      index: true,
      element: indexRoute.element
    },
    indexRoute,
    iconRoute,
    dailyRoute,
    chineseRoute,
    japaneseRoute,
    fe1rRoute,
    fe3rRoute
  ]
}
