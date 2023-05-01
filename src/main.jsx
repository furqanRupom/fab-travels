import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Providers from './providers/providers.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Providers>
    <RouterProvider router={router} />
  </Providers>
  </React.StrictMode>,
)
