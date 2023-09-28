import { createClient, groq } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Utility function to get projects from sanity database
// createClient allows us to read data from the admin
export async function getProjects() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion
  });

  // Use groq to query the database
  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`
  )
}