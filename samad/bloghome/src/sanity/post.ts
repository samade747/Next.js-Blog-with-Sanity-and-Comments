// sanity/schemas/post.ts
export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'postName',
        title: 'Post Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        // We keep slug for URLs, generating it from postName
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'postName',
          maxLength: 96
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postDescription',
        title: 'Post Description',
        type: 'text',
        rows: 4,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postImage',
        title: 'Post Image',
        type: 'image',
        options: {
          hotspot: true // Enables UI for selecting image focal point
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'Important for SEO and accessibility'
          }
        ],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postDate',
        title: 'Post Date',
        type: 'datetime',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postAuthor',
        title: 'Post Author',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'bio',
            title: 'Brief Bio',
            type: 'text',
            rows: 2
          }
        ],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postContent',
        title: 'Post Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
                description: 'Important for SEO and accessibility'
              }
            ]
          }
        ],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'readTime',
        title: 'Read Time (minutes)',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'postName',
        author: 'postAuthor.name',
        media: 'postImage'
      },
    prepare(selection: { title: string; author: string; media: any }) {
      const { title, author, media } = selection
      return {
        title: title,
        subtitle: `By ${author}`,
        media: media
      }
    }
    }
  }