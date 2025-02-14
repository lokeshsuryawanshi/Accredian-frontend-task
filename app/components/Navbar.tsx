import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    { name: 'Web Development', href: '/courses/web-dev' },
    { name: 'Artificial Intelligence', href: '/courses/ai' },
    { name: 'Machine Learning', href: '/courses/ml' },
    { name: 'Cyber Security', href: '/courses/cyber-security' },
  ];

  return (
    <nav className="bg-white shadow-sm ">
      {/* Top notification bar */}
      <div className="w-full bg-[#1A73E8] bg-opacity-15 py-2 px-4 text-sm text-gray-600 text-center">
        Navigate your ideal career path with tailored expert advice
        <Link href="/contact-expert" className="text-blue-500 ml-2 hover:underline">
          Contact Expert
        </Link>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-12">
            <div className='flex flex-col space-y-[-4px]'>
              <Link href="/" className="flex items-center text-blue-500 font-extrabold text-3xl"> accredian
              </Link>
              <p className='text-gray-600 font-thin text-xs pl-1'>credentials that matters</p>
            </div>
            <div className="relative ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <button 
                  className="px-3 py-2 flex items-center text-sm"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                >
                  Courses
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {courses.map((course) => (
                        <Link
                          key={course.name}
                          href={course.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-700 hover:text-gray-900 ">

            <Link href="/refer" className="px-3 py-2 ">
              Refer & Earn
            </Link>
            <Link href="/resources" className="px-3 py-2 ">
              Resources
            </Link>
            <Link href="/about" className="px-3 py-2 ">
              About Us
            </Link>
            <Link href="/login" className="px-3 py-2 ">
              Login
            </Link>
            <Link
              href="/try-free"
              className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Try for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/courses"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Courses
            </Link>
            <Link
              href="/refer"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Refer & Earn
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="/try-free"
              className="block px-3 py-2 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Try for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Tabs = () => {
  const tabs = ['Refer', 'Benefits', 'FAQs', 'Support'];
  const [activeTab, setActiveTab] = useState('Refer');

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="bg-white rounded-full shadow-sm">
        <nav className="flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 text-center text-sm font-medium transition-colors duration-200 
                ${activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export { Navbar, Tabs };