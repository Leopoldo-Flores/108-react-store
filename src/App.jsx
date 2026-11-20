import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Catalog from './pages/Catalog'
import 'bootstrap/dist/css/bootstrap.min.css';

// NEW (Class 1): React Router (npm install react-router-dom)
//   BrowserRouter = watches the URL in the address bar
//   Routes        = looks at the URL and shows the ONE Route that matches
//   Route         = connects a URL (path) to a page (element)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// NEW (Class 1): the new pages (they live in src/pages)
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  
  return (
    // NEW (Class 1): everything goes inside <BrowserRouter> so routing works
    <BrowserRouter>
    {/* CHANGED (Class 1): className="App" uses the layout rules in Footer.css
        (min-height 100vh + flex column), which keeps the footer at the bottom of the screen */}
    <div className="App">
    {/* Navbar is OUTSIDE <Routes>, so it shows on every page */}
    <Navbar/>

    {/* NEW (Class 1): <main> holds the current page.
        className="main-content" (Footer.css) = padding, max width 1200px, centered,
        and it grows to push the footer down */}
    <main className="main-content">
      {/* NEW (Class 1): instead of always showing <Catalog/>, we show the page that matches the URL */}
      <Routes>
        {/* path = the URL | element = the page to show (always written as a tag: <Home />) */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* path="*" = any other URL -> the 404 page. Keep it LAST. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

    {/* Footer is also OUTSIDE <Routes>, so it shows on every page */}
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
