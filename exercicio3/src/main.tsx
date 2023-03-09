
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Button from './components/Button'
import Card from './components/Card'

import Header from './components/Header'
import './index.css'
import HomeBody from './Routes/Home/HomeBody'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
