



export interface Post {
  _id: string;
  postName: string;
  postDescription: string;
  postImageUrl: string;
  postDate: string;
  postAuthor: {
    name: string;
    imageUrl: string;
    bio: string;
  };
  postContent: any; // Use a specific type if possible, e.g., PortableTextBlock[]
  readTime: number;
}



// export interface Post {
//   _id: string;
//   slug: string; // Ensure this is a string
//   postName: string;
//   postDescription: string;
//   postImageUrl: string;
//   postDate: string;
//   postAuthor: {
//     name: string;
//     imageUrl: string;
//     bio: string;
//   };
//   postContent: any;
//   readTime: number;
// }

  
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