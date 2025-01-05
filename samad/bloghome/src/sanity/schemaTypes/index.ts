import { type SchemaTypeDefinition } from 'sanity'
import post from '../post'
import comment from '../comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, comment],
}
