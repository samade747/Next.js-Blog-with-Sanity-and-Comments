// sanity/schemas/post.ts
export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 4,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'authorImage',
        title: 'Author Image',
        type: 'url',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'readTime',
        title: 'Read Time (minutes)',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      }
    ]
  }