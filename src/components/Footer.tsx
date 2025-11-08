import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Fundi Services</h3>
            <p className='text-gray-400'>Your trusted partner for home maintenance and improvement. Quality service, guaranteed.</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href='/services' className='hover:text-blue-400'>Services</a></li>
              <li><a href='/gallery' className='hover:text-blue-400'>Gallery</a></li>
              <li><a href='/booking' className='hover:text-blue-400'>Book Now</a></li>
              <li><a href='/about' className='hover:text-blue-400'>About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <p className='text-gray-400'>123 Uhuru Highway, Nairobi, Kenya</p>
            <p className='text-gray-400'>contact@fundiservices.co.ke</p>
            <p className='text-gray-400'>+254 700 000 000</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'><Facebook size={24} /></a>
              <a href='#' className='text-gray-400 hover:text-white'><Twitter size={24} /></a>
              <a href='#' className='text-gray-400 hover:text-white'><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-6 text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Fundi Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}