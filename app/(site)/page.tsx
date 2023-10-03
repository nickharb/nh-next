import Image from 'next/image'
import Link from 'next/link'
import { getHomepage, getProjects } from '@/sanity/sanity-utils'

// Github:
// https://github.com/nickharb/nh-next

// Reference:
// YouTube: Personal Website with Next.js 13, Sanity.io, TailwindCSS, and TypeScript: https://www.youtube.com/watch?v=OcTPaUfay5I
// freeCodeCamp tutorial: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/
// Official Sanity toolkit: https://www.sanity.io/plugins/next-sanity
// Next/Sanity tutorial: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

export default async function Home() {
  // In next 13, components are server-side-rendered by default
  // Getting the projects here happens on the server side for SEO
  const projects = await getProjects()
  const homepage = await getHomepage('home')
  return (
    <div>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='intro-section'>
          <h1>{homepage.title}</h1>
          <p>{homepage.intro}</p>
          {homepage.image && (
            <Image
              src={homepage.image}
              alt={homepage.title}
              width={250}
              height={100}
              className='object-cover rounded-md'
            />
          )}
        </div>
        {projects.map((project) => (
          <Link
            href={`/works/${project.slug}`}
            key={project._id}
            className='border border-emerald-600 rounded-md p-3'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={100}
                className='object-cover rounded-md'
              />
            )}
            <h2 className='text-normal italic'>
              {project.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
