import { useRouter } from 'next/router';
import blogData from '@/components/Blog/blogData'; 

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Convert id to a number for comparison
  const blogId = Number(id);
  
  // Log the id and blogId to see what is happening
  console.log('URL id:', id);
  console.log('Converted blogId:', blogId);

  const blog = blogData.find((b) => b.id === blogId);
  
  // Log the blog data to check if it was found
  console.log('Found blog:', blog);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.paragraph}</p>
    </div>
  );
};

export default BlogDetail;
