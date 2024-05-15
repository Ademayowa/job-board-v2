import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import { getJob } from '@/sanity/lib/queries';
import { Job } from '@/types';

import { MdLocationOn } from 'react-icons/md';
import { FaSackDollar } from 'react-icons/fa6';
import BaseLayout from '@/components/layouts/BaseLayout';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`*[_type=="job"]
  {
    slug
  } 
  `;

  const slugs: Job[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug: slug,
  }));
}

export default async function JobDetails({ params }: Props) {
  const slug = params.slug;
  const job = await getJob(slug);

  return (
    <section className='bg-[#F2F7FB]'>
      <BaseLayout>
        <div className='py-10 pb-10'>
          <div className='mt-20 lg:mt-24 bg-white rounded-2xl drop-shadow-md'>
            <div className='lg:px-8 px-6 py-10 pb-16'>
              <div>
                <h2 className='text-blueColor text-lg md:text-2xl font-bold mt-2'>
                  {job.title}
                </h2>

                <div className='flex items-center mt-2 space-x-2'>
                  <MdLocationOn className='w-5 h-5 text-blue-500' />
                  <p className='text-grayColor'>{job.location}</p>
                </div>

                <div className='flex items-center my-2 space-x-2'>
                  <FaSackDollar className='w-5 h-5 text-blue-500' />
                  <p className='text-grayColor'>{job.salary}</p>
                </div>
              </div>
              <hr className='border-b border-red-200' />

              <div className='mt-5'>
                <h3 className='font-bold my-3 text-grayColor'>Summary</h3>
                <p className='max-w-4xl sm:text-sm md:text-base text-grayColor !leading-7'>
                  {job.description}
                </p>

                <div className='max-w-4xl sm:text-sm md:text-base text-grayColor !leading-7'>
                  <h3 className='font-bold !text-base my-3'>
                    Responsibilities
                  </h3>
                  <PortableText
                    value={job.body}
                    components={RichTextComponents}
                  ></PortableText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </section>
  );
}
