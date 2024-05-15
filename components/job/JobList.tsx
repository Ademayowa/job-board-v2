import { MdLocationOn } from 'react-icons/md';
import SectionTitle from '@/components/SectionTitle';
import { Job } from '@/types';
import Link from 'next/link';

type Props = {
  job: Job;
};

export const dynamic = 'force-dynamic';

export default function JobList({ job }: Props) {
  return (
    <Link
      href={`/job/${job.slug}`}
      className='rounded-lg shadow-md bg-white p-7 cardAnimation'
    >
      <div className='flex items-center'>
        <h3 className='flex flex-1 text-blueColor text-lg font-bold'>
          {job.title}
        </h3>
        <p className='text-blueColor font-bold'>{job.salary}</p>
      </div>

      <div className='flex items-center space-x-1 mt-2'>
        <MdLocationOn className='h-5 w-5 text-sky-500 -ml-1' />
        <p className='text-grayColor'>{job.location}</p>
      </div>

      <div className='mt-2'>
        <p className='text-grayColor '>
          Date Posted:{' '}
          {new Date(job?._updatedAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>

      <p className='text-grayColor mt-3 !w-full md:w-3/4 leading-8 line-clamp-2'>
        {job.description}
      </p>

      <div className='flex mt-2.5'>
        <button className='rounded bg-[#FF5555] px-5 py-2.5 text-white shadow-sm hover:bg-red-600'>
          View job
        </button>
      </div>
    </Link>
  );
}
