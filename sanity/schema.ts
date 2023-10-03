import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import profile from './schemas/profile'
import project from './schemas/project'
import youtube from './schemas/youtube'
import page from './schemas/page'
import home from './schemas/home'
import about from './schemas/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, post, project, author, category, blockContent, profile, youtube, home, about],
}
