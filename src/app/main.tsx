import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '@/pages/homepage'
import '@/shared/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
