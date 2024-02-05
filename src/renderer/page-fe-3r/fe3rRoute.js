import { fe3rConfig } from './fe3rConfig'
import { FE3RPage } from './FE3RPage'
import { fe3rItemRoute } from './item/fe3rItemRoute'
import { fe3rRoleRoute } from './role/fe3rRoleRoute'
import { fe3rIndexRoute } from './index/fe3rIndexRoute'

export const fe3rRoute = {
  path: fe3rConfig.path,
  element: FE3RPage,
  children: [
    { index: true, element: fe3rIndexRoute.element },
    fe3rIndexRoute,
    fe3rRoleRoute,
    fe3rItemRoute
  ]
}
