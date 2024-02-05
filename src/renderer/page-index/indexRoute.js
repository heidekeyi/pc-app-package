import { indexConfig } from './indexConfig'
import { IndexPage } from './IndexPage'

export const indexRoute = {
  path: indexConfig.path,
  element: IndexPage,
  children: []
}
