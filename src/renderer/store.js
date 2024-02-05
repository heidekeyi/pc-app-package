import { configureStore } from '@reduxjs/toolkit'
import { pageReducer } from './page/pageSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer
  }
})
