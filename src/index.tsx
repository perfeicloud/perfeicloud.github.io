import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
