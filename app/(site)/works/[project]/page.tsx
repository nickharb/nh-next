import React from 'react'
import { getProject } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project // get slug from next.js params
  const project = await getProject(slug)

  const portableTextComponents = {
    types: {
      youtube: ({ value }: any) => {
        if (!value?.url) {
          return null
        }
        var split = value.url.split("v=");
        var splitAgain = split[1].split("&");
        var videoId = splitAgain[0];
        return (<iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>)
      }
    },
  }

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1 className='text-white text-5xl font-extrabold'>{project.name}</h1>
        {project.url && (
          <a href={project.url} title='View Project' target='_blank' rel='noopener noreferrer' className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'>
            View Project
          </a>
        )}
      </header>
      <div className='text-lg text-gray-700 mt-5'>
        <PortableText value={project.content} components={portableTextComponents} />
      </div>

      {/* <Image src={project.image} alt={project.name} width={1920} height={1080} className='mt-10 border-2 border-gray-700 object-cover rounded-xl' /> */}
    </div>
  )
}

