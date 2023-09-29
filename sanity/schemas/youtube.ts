import { defineType } from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ]
})