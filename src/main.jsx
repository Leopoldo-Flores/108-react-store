import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// NEW (Class 1): Bootstrap's JavaScript.
// It makes the navbar's mobile "hamburger" button open and close the menu.
// (Bootstrap's CSS is already imported in App.jsx)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
