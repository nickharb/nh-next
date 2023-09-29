import {defineField, defineType} from 'sanity'
import {YouTubePreview} from '../components/youtube-preview'

const youtube = defineType({
  name: 'youtube',
  title: 'Youtube embed',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
})

export default youtube