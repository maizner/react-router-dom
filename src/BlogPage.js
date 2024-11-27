import  React  from 'react'; 
import { Link } from 'react-router-dom';
import { blogdata } from './blogdata';
import { useBlog } from "./BlogContext";

function BlogPage () {
   const { posts } = useBlog();


   return (
    <>
    <h1>BlogPage</h1>
    <ul>
      {posts 
      .filter( post => post.state === 'activo' )
      .map( post => (
         < BlogLink key = {post.slug} post={post}  />
      ) )}
    </ul>
    </>
   )
}

function BlogLink({post}) {
   return(
      <li>
         <Link to= {`/blog/${post.slug}`}>{post.title}</Link>
      </li>
   )
}


export { BlogPage }; 
