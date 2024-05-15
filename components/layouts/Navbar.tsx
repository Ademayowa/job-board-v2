'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/index';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className='bg-[#0F4A7B] fixed top-0 z-10 w-full pt-3 lg:pt-0'>
      <div className='max-w-6xl mx-auto flex items-center lg:h-[96px] py-4 justify-between flex-wrap md:px-16 px-5'>
        <div>
          <Link href='/' className='text-white font-bold text-xl'>
            Find Gigs
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className='block lg:hidden max-h-screen'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center px-3 py-2 rounded text-white'
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul
            className={`w-full block lg:flex lg:items-center lg:w-auto ${
              isOpen ? 'block' : 'hidden justify-end flex-1'
            }`}
          >
            {/* Make link active when a user navigate to a particular route */}
            {navLinks.map((link, index) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              return (
                <li
                  key={link.id}
                  className={`cursor-pointer md:text-lg ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  } font-medium text-white pb-2 lg:pb-0 pt-6 lg:pt-0`}
                >
                  <Link
                    /* When a link isActive, there is a red color & underline border line */
                    className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FF5555] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      isActive && 'after:scale-x-100'
                    }`}
                    href={`${link.route}`}
                    prefetch={false}
                    as={link.route}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
