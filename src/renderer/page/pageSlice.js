import { createSlice } from '@reduxjs/toolkit'
import { pageConfig } from './pageConfig'

const initialState = {
  path: '',
  list: []
}

console.log('max id is', Math.max(...pageConfig.map((it) => +it.id)))

function onPageChange(state, action) {
  const path = action.payload
  const ob = pageConfig.reduce(
    (res, it) => {
      const o = it.path === path ? res.in : res.out
      o.push(it)
      return res
    },
    { in: [], out: [] }
  )
  state.path = path
  state.list = [...ob.in, ...ob.out]
}

onPageChange(initialState, { payload: pageConfig[0].path })

export const {
  actions: { pageChange },
  reducer: pageReducer
} = createSlice({
  name: 'page',
  initialState,
  reducers: {
    pageChange: onPageChange
  }
})
