import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white py-8 shadow bg-black/20 backdrop-blur-sm text-xl italic">
      <div className="container mx-auto px-4 flex justify-between md:justify-center items-center">
    

        {/* Hamburger menu (only visible on mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <ul
          className={`
            flex-col md:flex-row md:items-center md:space-x-6
            absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent px-4 md:px-0 z-10
            transition-all duration-300 ease-in-out
            ${isOpen ? 'flex' : 'hidden'} md:flex
          `}
        >
          <li className="py-3 md:py-0">
            <a href="#" className="block hover:text-gray-300 text-xl font-medium">Home</a>
          </li>
          <li className="py-3 md:py-0 md:mx-6">
            <span className="hidden md:inline text-gray-400 text-xl">/</span>
          </li>
          <li className="py-3 md:py-0">
            <a href="#about" className="block hover:text-gray-300 text-xl font-medium">About Me</a>
          </li>
          <li className="py-3 md:py-0 md:mx-6">
            <span className="hidden md:inline text-gray-400 text-xl">/</span>
          </li>
          <li className="py-3 md:py-0">
            <a href="#contact" className="block hover:text-gray-300 text-xl font-medium">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

