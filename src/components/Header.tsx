import { Link, NavLink } from 'react-router-dom';
import { Home, Wrench, GalleryVertical, Calendar, Star, Users, Mail } from 'lucide-react';

const navLinks = [
  { to: '/services', icon: Wrench, text: 'Services' },
  { to: '/gallery', icon: GalleryVertical, text: 'Galleries' },
  { to: '/booking', icon: Calendar, text: 'Scheduling' },
  { to: '/reviews', icon: Star, text: 'Reviews' },
  { to: '/about', icon: Users, text: 'About Us' },
  { to: '/contact', icon: Mail, text: 'Contact' },
];

export default function Header() {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to='/' className='text-3xl font-bold text-blue-600'>
          Fundi Services
        </Link>
        <nav className='hidden md:flex items-center space-x-6'>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : ''
                }`
              }
            >
              <link.icon className='h-5 w-5' />
              <span>{link.text}</span>
            </NavLink>
          ))}
        </nav>
        <button className='md:hidden p-2 rounded-md hover:bg-gray-100'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
    </header>
  );
}