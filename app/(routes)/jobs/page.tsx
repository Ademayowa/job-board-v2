import SectionTitle from '@/components/SectionTitle';
import JobList from '@/components/job/JobList';
import BaseLayout from '@/components/layouts/BaseLayout';
import { getJobs } from '@/sanity/lib/queries';

export const dynamic = 'force-dynamic';

export default async function AllJobsPage() {
  const jobs = await getJobs();

  return (
    <section className='bg-[#F2F7FB]'>
      <BaseLayout>
        <div className='pt-32 lg:pt-40'>
          <SectionTitle title='All Jobs' />
        </div>

        <div className='mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20'>
          {jobs.map((job) => (
            <JobList key={job._id} job={job} />
          ))}
        </div>
      </BaseLayout>
    </section>
  );
}
