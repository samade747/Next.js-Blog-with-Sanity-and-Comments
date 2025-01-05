export interface Post {
    _id: string
    title: string
    slug: string
    excerpt: string
    content: any
    author: string
    authorImage: string
    publishedAt: string
    readTime: number
  }
  
  export interface Comment {
    _id: string
    text: string
    author: string
    authorImage: string
    createdAt: string
    post: {
      _ref: string
    }
  }