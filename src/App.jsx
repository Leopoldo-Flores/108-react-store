// BrowserRouter, Routes and Route come from React Router (npm install react-router-dom)
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// one import per page (pages live in src/pages)
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    // BrowserRouter watches the URL in the address bar; everything that uses routes goes inside it
    <BrowserRouter>
      {/* "app" = our own class from App.css (keeps the footer at the bottom) */}
      <div className='app'>
        {/* Navbar is OUTSIDE <Routes>, so it shows on every page */}
        <Navbar />

        {/* container = Bootstrap box with a max width, centered, with side padding
            py-4      = padding top + bottom, size 4 (1.5rem = 24px) */}
        <main className='container py-4'>
          {/* Routes looks at the URL and shows the ONE Route that matches */}
          <Routes>
            {/* path = the URL, element = the page component to show (always with < />) */}
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* path='*' = "anything else" -> the 404 page. Keep it LAST. */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer is also outside <Routes>, so it shows on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
