// src/app/posts/[slug]/page.tsx
import { client } from '@/sanity/lib/client'
import Comments from '@/app/components/Comments'
import CommentForm from '@/app/components/CommentForm'
import type { Post, Comment } from '@/types'

async function getPost(slug: string): Promise<Post> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      content,
      author,
      authorImage,
      publishedAt,
      readTime
    }
  `, { slug })
}

async function getComments(postId: string): Promise<Comment[]> {
  return client.fetch(`
    *[_type == "comment" && post._ref == $postId] | order(createdAt desc) {
      _id,
      text,
      author,
      authorImage,
      createdAt
    }
  `, { postId })
}

export default async function PostPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const post = await getPost(slug)
  const comments = await getComments(post._id)

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-8">
        <img
          src={post.authorImage}
          alt={post.author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">{post.author}</p>
          <p className="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} min read
          </p>
        </div>
      </div>
      <div className="prose max-w-none mb-12">{post.content}</div>
      <CommentForm postId={post._id} />
      <Comments comments={comments} />
    </article>
  )
}
