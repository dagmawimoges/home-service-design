import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className='bg-white text-gray-800'>
      <Toaster richColors />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}