import { getJobs } from '@/sanity/lib/queries';
import JobList from './JobList';
import { Job } from '@/types';

export const dynamic = 'force-dynamic';

export default async function Job() {
  const job = await getJobs();

  return (
    <>
      {job.map((job) => (
        <JobList key={job._id} job={job} />
      ))}
    </>
  );
}
