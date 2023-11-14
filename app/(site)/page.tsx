import Image from 'next/image'
import Link from 'next/link'
import { getHomeContent, getProjects } from '@/sanity/sanity-utils'

// Github:
// https://github.com/nickharb/nh-next

// Reference:
// YouTube: Personal Website with Next.js 13, Sanity.io, TailwindCSS, and TypeScript: https://www.youtube.com/watch?v=OcTPaUfay5I
// freeCodeCamp tutorial: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/
// Official Sanity toolkit: https://www.sanity.io/plugins/next-sanity
// Next/Sanity tutorial: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

export default async function Home() {
  return (
    <div className='mt-5 md:mt-10 lg:mt-20'>
      <h1 className='text-xl leading-normal md:text-2xl lg:text-4xl lg:leading-normal'>Nick Harbaugh is an artist and computer programmer working with data and artificial intelligence to explore what it means to be human in a technological world.</h1>
      <div className='flex gap-5 mt-5 md:mt-10 lg:mt-20'>
        <a href='https://www.sevenmilemedia.com/work/' target='_blank' rel='noreferrer' className='underline'>Portfolio</a>
        <a href='https://www.instagram.com/nickharb/' target='_blank' rel='noreferrer' className='underline'>Instagram</a>
        <a href='https://www.linkedin.com/in/nickharb/' target='_blank' rel='noreferrer' className='underline'>LinkedIn</a>
        <a href='https://medium.com/@nickharb' target='_blank' rel='noreferrer' className='underline'>Medium</a>
      </div>
    </div>
  )
}
