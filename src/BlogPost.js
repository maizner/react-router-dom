import  React  from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
import { blogdata } from './blogdata';

function BlogPost () {
   const auth = useAuth(); 
   const navigate = useNavigate();
   const { slug } = useParams();
   const blogpost = blogdata.find( post => post.slug === slug)
   const deleteEnabled = auth.user?.isAdmin || blogpost.author === auth.user.username;
   const goBack = () => {
      // navigate('/blog')
      navigate(-1)
   }

   return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={goBack}>Volver</button>
      {deleteEnabled && (
         <button>Eliminar post </button>
      )}
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      
  
    </>
   )
}

export { BlogPost }; 