'use client';

import Link from 'next/link';

/* This component represents a client-side Link to be used inside of a server component */
export default function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <Link
      className='text-base flex items-center mb-2 text-gray-500 hover:text-[#FF761C]'
      href={route}
    >
      {children}
    </Link>
  );
}
