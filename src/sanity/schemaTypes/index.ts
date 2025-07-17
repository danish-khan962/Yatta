import { type SchemaTypeDefinition } from 'sanity'
import { creator } from './creator'
import { posts } from './posts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [creator, posts]
}
