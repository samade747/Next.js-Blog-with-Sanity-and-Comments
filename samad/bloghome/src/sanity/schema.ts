// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import post from '@/sanity/post'
import comment from '@/sanity/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, comment],
}

