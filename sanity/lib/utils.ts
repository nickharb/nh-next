import { createClient, groq } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { Project } from '@/types/Project'

// Utility function to get projects from sanity database
// createClient allows us to read data from the admin
// Define the promise type returning an array of projects
// Adding types to the sanity utils keeps all the typing in one place
// All pages and components that use these utils inherit the types
export async function getProjects(): Promise<Project[]> {
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