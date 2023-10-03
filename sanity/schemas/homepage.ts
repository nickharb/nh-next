import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Homepage intro image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
    }),
  ],
})


