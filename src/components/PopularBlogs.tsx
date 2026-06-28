import { MessageCircle, ThumbsUp } from "lucide-react";

const blogs = [
  {
    title: "Mastering React 19 Action States",
    author: "Jane Doe",
    likes: 342,
    comments: 28,
  },
  {
    title: "A Complete Guide to TanStack Router Type Safety",
    author: "Alex Smith",
    likes: 198,
    comments: 14,
  },
  {
    title: "Why Font Ligatures Make Your Code Look Gorgeous",
    author: "Carlos Mendez",
    likes: 512,
    comments: 47,
  },
  {
    title: "How to Build a Paginated Component with Tailwind CSS",
    author: "Sarah Jenkins",
    likes: 89,
    comments: 6,
  },
  {
    title: "Demystifying Client-Side Filtering vs API Pagination",
    author: "David Kim",
    likes: 256,
    comments: 19,
  },
];
const PopularBlogs = () => {
  return (
    <div className="bg-white p-5 w-92 mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>

            <span className="text-gray-600">Publish by {blog.author}</span>

            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
