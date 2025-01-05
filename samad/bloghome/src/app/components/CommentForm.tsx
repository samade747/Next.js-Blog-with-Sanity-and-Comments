// src/components/CommentForm.tsx
'use client'

import { useState } from 'react'
import { client } from '@/sanity/lib/client'

export default function CommentForm({ postId }: { postId: string }) {
  const [comment, setComment] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    await client.create({
      _type: 'comment',
      text: comment,
      post: { _ref: postId },
      author: 'Anonymous User', // Replace with actual user
      authorImage: '/default-avatar.png', // Replace with actual user image
      createdAt: new Date().toISOString()
    })

    setComment('')
    // Add logic to refresh comments
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={3}
        placeholder="Add a comment..."
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  )
}