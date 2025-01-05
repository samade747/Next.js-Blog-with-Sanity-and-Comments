// src/components/BlogCard.tsx
import Link from 'next/link'
import type { Post } from '@/types'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <div className="flex items-center mb-4">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <p className="font-medium">{post.author}</p>
        </div>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} min read
        </div>
      </div>
    </Link>
  )
}