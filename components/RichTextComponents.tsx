import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

/* This component can be used to customize the rendering of different
elements in the rich text editor (React portable text), such as images, headings, lists, blockquotes, and links. */
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-96 mx-auto'>
          <Image
            src={urlForImage(value).url()}
            className='object-contain'
            alt='blog post'
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='ml-10 list-disc space-y-5'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='mt-lg list-decimal'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className='text-4xl py-10 font-bold'>{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className='text-3xl py-10 font-bold'>{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className='text-2xl py-10 font-bold'>{children}</h1>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className='boder-l-[#FAFAFA] border-l-4 pl-5 my-5 py-5'>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target='_blank'
          className='bg-[#FF5555] rounded-md px-8 py-5 text-white shadow-md hover:bg-red-600'
        >
          {children}
        </Link>
      );
    },
  },
};
