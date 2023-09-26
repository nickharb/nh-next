import Image from 'next/image'
import { client } from '@/lib/sanity-client'

// Github:
// https://github.com/nickharb/nh-next

// Reference:
// freeCodeCamp tutorial: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/
// YouTube: Personal Website with Next.js 13, Sanity.io, TailwindCSS, and TypeScript: https://www.youtube.com/watch?v=OcTPaUfay5I
// Official Sanity toolkit: https://www.sanity.io/plugins/next-sanity
// Next/Sanity tutorial: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

export default function Home() {
  const postData = client.fetch(`*[_type == "post"]{title, content}`);
  console.log(postData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">Hello World!</h1>
    </main>
  )
}
