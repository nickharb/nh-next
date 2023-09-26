import Image from 'next/image'
import { client } from '@/lib/sanity-client'

export default function Home() {
  const postData = client.fetch(`*[_type == "post"]{title, content}`);
  console.log(postData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">Hello World!</h1>
    </main>
  )
}
