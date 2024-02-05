import { iconConfig } from '../page-icon/iconConfig'
import { indexConfig } from '../page-index/indexConfig'
import { dailyConfig } from '../page-daily/dailyConfig'
import { chineseConfig } from '../page-chinese/chineseConfig'
import { japaneseConfig } from '../page-japanese/japaneseConfig'
import { fe1rConfig } from '../page-fe-1r/fe1rConfig'
import { fe3rConfig } from '../page-fe-3r/fe3rConfig'

const id = (() => {
  let value = 90
  const step = value
  return () => {
    value += step
    return value.toString().padStart(6, '0')
  }
})()

export const pageConfig = [
  indexConfig,
  iconConfig,
  dailyConfig,
  fe3rConfig,
  fe1rConfig,
  chineseConfig,
  japaneseConfig
].map((it) => {
  it.id = id()
  return it
})
