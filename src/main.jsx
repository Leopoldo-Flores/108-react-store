import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap 5 is loaded ONCE here, so every component can use its classes.
// bootstrap.min.css       = all the Bootstrap styles (btn, card, navbar, py-4, ...)
// bootstrap.bundle.min.js = Bootstrap's JavaScript; it makes the mobile menu button open/close
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Our own global styles load AFTER Bootstrap, so they can override it
import './index.css'
import App from './App.jsx'

// Finds <div id="root"> in index.html and draws the whole <App /> inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
