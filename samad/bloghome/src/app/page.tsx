// src/app/page.tsx
import { client } from '@/sanity/lib/client'
import BlogCard from '@/app/components/BlogCard'
import type { Post } from '@/types'

async function getPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      authorImage,
      publishedAt,
      readTime
    }
  `)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
