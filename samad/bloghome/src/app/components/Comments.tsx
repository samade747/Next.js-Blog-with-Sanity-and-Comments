// src/components/Comments.tsx
import type { Comment } from '@/types'

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <img
              src={comment.authorImage}
              alt={comment.author}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">{comment.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <p className="text-gray-700">{comment.text}</p>
        </div>
      ))}
    </div>
  )
}
