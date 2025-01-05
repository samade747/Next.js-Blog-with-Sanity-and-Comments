// sanity/schemas/comment.ts
export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'text',
        title: 'Text',
        type: 'text',
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
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: [{ type: 'post' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        validation: (Rule: any) => Rule.required()
      }
    ]
  }