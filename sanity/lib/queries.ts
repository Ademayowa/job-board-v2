import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';
import { client } from './client';
import { Job } from '@/types';

//👉 Fetch jobs
export async function getJobs(): Promise<Job[]> {
  return client.fetch(
    groq`
    *[_type == "job"] | order(_updatedAt desc) {
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
    }
    `
  );
}

//👉 Get single job
export async function getJob(slug: string): Promise<Job> {
  return client.fetch(
    groq`
    *[_type == "job" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      salary,
      location,
      title,
      description,
      "slug":slug.current,
      "mainImage": mainImage.asset->url, 
     body
    }`,
    { slug }
  );
}
