
import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card'

import Header from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
)
