import type { PreviewProps } from 'sanity'
import { Flex, Text } from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'

export function YouTubePreview(props: any) {
  const { url } = props
  console.log(url)
  return (
    <Flex padding={4} justify={'center'}>
      {url
        ? <YouTubePlayer url={url} />
        : <Text>Add a YouTube URL</Text>
      }
    </Flex>
  )
}