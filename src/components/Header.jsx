import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/newlogo.png";

export const NavBar = ({ handleMobileMenu }) => {
  return (
    <>
      <div className="md:hidden bg-white-800 px-6  space-y-2">
        <nav className="flex flex-col space-y-2 items-start text-md font-bold">
          <Link to="/" className="text-black hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about-us" className="text-black hover:text-yellow-500">
            About
          </Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-yellow-500 flex items-center">
              Peace Operations
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-80">
              <Link
                to="/history"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                History-International Day Of Peace Keepers
              </Link>
              <Link
                to="/peaceful-connections"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Empowering Peaceful Connections program
              </Link>
              <Link
                to="/peaceful-connections-rwanda"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Empowering Peaceful Connections program in Rwanda
              </Link>
              <Link
                to="/expert-pool-civilian"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Expert Pool for Civilian Peacebuilding
              </Link>
              <Link
                to="/peacekeepingoperations"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Peace Keeping Operations
              </Link>
              <Link
                to="/un-operations"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Un-Operations
              </Link>
              <Link
                to="/roleofpeacekeeping"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                The Role Of PeaceKeeping
              </Link>
              <Link
                to="/principlesofpeacekeeping"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Principles of peacekeeping
              </Link>
              <Link
                to="/humanitarian-efforts"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Our peacekeepers
              </Link>
              <Link
                to="/humanitarian-efforts"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Environmental and Climate-Sensitive Approach
              </Link>
              <Link
                to="/humanitarian-efforts"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Greening the blue helmets
              </Link>
              <Link
                to="/humanitarian-efforts"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Legal Basis
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-black hover:text-yellow-500 flex items-center">
              News & Media
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <Link
                to="/stories"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                UN-PeaceKeeping Stories
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Gallery
              </Link>
              <Link
                to="/news"
                className="block px-4 py-2 text-black hover:bg-yellow-500"
              >
                Latest News
              </Link>
            </div>
          </div>
          <Link to="/contact" className="text-black hover:text-yellow-500">
            Contact
          </Link>
          <Link
            to="/countries"
            className="text-black hover:text-yellow-500"
            onClick={handleMobileMenu}
          >
            Countries
          </Link>
        </nav>
        <div className=" text-start">
          <Link
            to="/donate#donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-black  px-4 py-2 rounded"
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* First Navbar Layer - Details, Social Media, Contact Info */}
      <div className="hidden md:flex bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* United Nations Soldiers of Peace Association */}
          <h3 className="text-sm md:text-base font-semibold">
            United Nations Soldiers of Peace Association
          </h3>

          {/* Contact Details */}
          <div className="flex space-x-6 items-center">
            <a
              href="mailto:info@un-spia.org"
              className="text-gray-600 text-sm hover:text-gray-900"
            >
              info@un-spia.org
            </a>
            <a
              href="tel:+254115505050"
              className="text-gray-600 text-sm hover:text-gray-900"
            >
              +254 115 505050
            </a>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook Icon */}
                  <path d="M18.896 3H5.102C3.939 3 3 3.939 3 5.102v13.794C3 20.061 3.939 21 5.102 21h6.63v-7.647H9.576v-3h2.156v-2.24c0-2.13 1.281-3.292 3.219-3.292.914 0 1.701.067 1.929.098v2.24H15.86c-1.272 0-1.519.605-1.519 1.492v1.962h3.037l-.395 3H14.34V21h4.556C20.061 21 21 20.061 21 18.896V5.102C21 3.939 20.061 3 18.896 3z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter Icon */}
                  <path d="M23 2.999c-.839.371-1.739.621-2.685.733a4.66 4.66 0 002.048-2.571c-.877.518-1.848.894-2.858 1.1A4.608 4.608 0 0016.616 1c-2.543 0-4.608 2.062-4.608 4.604 0 .362.042.715.119 1.051C7.688 6.463 4.067 4.576 1.64 1.892a4.591 4.591 0 00-.625 2.313c0 1.597.814 3.003 2.051 3.832a4.614 4.614 0 01-2.085-.578v.059c0 2.229 1.587 4.086 3.686 4.51a4.649 4.649 0 01-2.077.079 4.61 4.61 0 004.305 3.204 9.263 9.263 0 01-5.722 1.97c-.371 0-.736-.022-1.096-.064a13.046 13.046 0 007.066 2.066c8.485 0 13.121-7.028 13.121-13.123 0-.199-.004-.396-.012-.592A9.383 9.383 0 0023 2.999z" />
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <div>
              <select className="bg-white border border-gray-300 text-gray-600 text-sm rounded-md p-1">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Divider */}
      <div className="bg-yellow-500 h-1 w-full"></div>

      {/* Second Navbar Layer - Logo, Navigation Links */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={logo}
                alt="UN-SPIA"
                className="w-20 h-20 sm:w-12 sm:h-12 md:w-20 md:h-20"
              />
            </Link>
            <h3 className="text-xl font-semibold sm:text-lg md:text-xl">
              United Nations-SPIA
            </h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8  font-semibold">
            <Link to="/" className="text-gray-600 hover:text-yellow-500">
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-gray-600 hover:text-yellow-500"
            >
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-yellow-500 flex items-center">
                Peace Operations
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-80">
                <Link
                  to="/history"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  History-International Day Of Peace Keepers
                </Link>
                <Link
                  to="/peaceful-connections"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Empowering Peaceful Connections program
                </Link>
                <Link
                  to="/peaceful-connections-rwanda"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Empowering Peaceful Connections program in Rwanda
                </Link>
                <Link
                  to="/expert-pool-civilian"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Expert Pool for Civilian Peacebuilding
                </Link>
                <Link
                  to="/peacekeepingoperations"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Peace Keeping Operations
                </Link>
                <Link
                  to="/un-operations"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Un-Operations
                </Link>
                <Link
                  to="/roleofpeacekeeping"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  The Role Of PeaceKeeping
                </Link>
                <Link
                  to="/principlesofpeacekeeping"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Principles of peacekeeping
                </Link>
                <Link
                  to="/humanitarian-efforts"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Our peacekeepers
                </Link>
                <Link
                  to="/humanitarian-efforts"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Environmental and Climate-Sensitive Approach
                </Link>
                <Link
                  to="/humanitarian-efforts"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Greening the blue helmets
                </Link>
                <Link
                  to="/humanitarian-efforts"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Legal Basis
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-600 hover:text-yellow-500 flex items-center">
                News & Media
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
                <Link
                  to="/stories"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  UN-PeaceKeeping Stories
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Gallery
                </Link>
                <Link
                  to="/news"
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-500"
                >
                  Latest News
                </Link>
              </div>
            </div>
            <Link
              to="/countries"
              className="text-gray-600 hover:text-yellow-500"
            >
              Countries
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-600 hover:text-yellow-500"
            >
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              to="/donate#donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-black  px-4 py-2 rounded"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={handleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {showMobileMenu && <NavBar />}
      </div>
    </header>
  );
};

export default Header;
