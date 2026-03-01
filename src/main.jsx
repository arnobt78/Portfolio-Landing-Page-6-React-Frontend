/**
 * Application entry point. Mounts the React app into #root and loads global styles.
 * StrictMode helps surface side-effect and deprecation issues in development.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
