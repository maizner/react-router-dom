import React from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
// import { blogdata } from './blogdata';
import { useBlog } from "./BlogContext";

function BlogPost () {

   const auth = useAuth(); 
   const { slug } = useParams();
   const { posts, updatePostState } = useBlog(); 
   const navigate = useNavigate();
   const blogpost =  posts.find( post => post.slug === slug);
   // const [blogpost, setBlogpost] = useState(posts.find(post => post.slug === slug ))
   // useEffect( () => {
   //    setBlogpost(posts.find(post => post.slug === slug));
   // }, [posts, slug])

   // const [rating, setRating] = useState(null);
   const userRole = auth.user?.role;
   const ownerRole = blogpost.author;
   const authDelete = userRole === 'admin';
   const authUnpublish = userRole === 'admin' || userRole === 'moderator' || ownerRole === auth.user?.username;
   const unAuth = userRole === 'unauthorized';

   const goBack = () => {
      navigate('/blog');
   }

   const handleReActivate = () => {
      updatePostState(blogpost.slug, 'activo'); 
      console.log('hizo clic en republish,  el estado es:', blogpost.state);
   }

   const handleDeactivate = () => {
      updatePostState(blogpost.slug, 'inactivo'); 
      console.log('hizo clic en unpublish,  el estado es:', blogpost.state);
   } 

   const handleRemove = () => {
      updatePostState(blogpost.slug, 'eliminado');
      console.log('hizo clic en Delete, el estado es:', posts.find(post => post.slug === slug)?.state);

   }

   const handleRateUp = () => {
      console.log('hizo clic en Like');
      // setRating(true);
   } 

   const handleRateDown = () => {
      console.log('hizo clic en Dislike');
      // setRating(false);
   } 

   if (blogpost && blogpost.state === 'activo'){
      return (
         <>
           <span>Created on: {blogpost.date} </span>
           <h2>{blogpost.title}</h2>
           <button onClick={goBack}> Go back</button>
     
           {authDelete && (
             <div>
               <button onClick={handleRemove}> Delete </button>
               <button onClick={handleReActivate}> Republish </button>
             </div>
           )}

           {authUnpublish && (
              <button onClick={handleDeactivate}> Unpublish </button>
           )}

           <p>{blogpost.author}</p>
           <p>{blogpost.content}</p>

           {unAuth && (
              <div>
                 <p>Do you like this post?</p>
                 <button onClick={handleRateUp}>Like </button>
                 <button onClick={handleRateDown}>Dislike </button>
              </div>
           )}
         </>
      );
   }

   return null;
}

export { BlogPost };
