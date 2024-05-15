import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { buildQuery } from '@/sanity/lib/utils';

interface GetJobsParams {
  query: string;
  category: string;
  page: string;
}

export const getJobs = async (params: GetJobsParams) => {
  const { query, category, page } = params;

  try {
    const job = await client.fetch(
      groq`${buildQuery({
        type: 'job',
        query,
        category,
        page: parseInt(page),
      })}{
        _id,
        title,
        "slug":slug.current,
        salary,
        location,
        "mainImage": mainImage.asset->url, 
        _createdAt,
         _updatedAt,
        description,
        body
      }`
    );

    return job;
  } catch (error) {
    console.log(error);
  }
};
