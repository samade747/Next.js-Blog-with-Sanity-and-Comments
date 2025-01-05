// src/app/posts/[slug]/page.tsx
import { client } from '@/sanity/lib/client'
import Comments from '@/app/components/Comments'
import CommentForm from '@/app/components/CommentForm'
import type { Post, Comment } from '@/types'

  async function getPost(slug: string): Promise<Post> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      postName,
      postDescription,
      "postImageUrl": postImage.asset->url,
      postDate,
      "postAuthor": {
        name,
        "imageUrl": image.asset->url,
        bio
      },
      postContent,
      readTime
    }`
  
    return await client.fetch(query, { slug })
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
      <h1 className="text-4xl font-bold mb-4">{post.postName}</h1>
      <div className="flex items-center mb-8">
        <img
          src={post.postAuthor.imageUrl}
          alt={post.postAuthor.name}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">{post.postAuthor.name}</p>
          <p className="text-gray-500">
            {new Date(post.postDate).toLocaleDateString()} · {post.readTime} min read
          </p>
        </div>
      </div>
      <div className="prose max-w-none mb-12">{/* Render rich text content appropriately */}</div>
      <CommentForm postId={post._id} />
      <Comments comments={comments} />
    </article>
  )
}
