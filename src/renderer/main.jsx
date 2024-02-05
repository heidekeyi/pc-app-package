import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </React.StrictMode>
)
