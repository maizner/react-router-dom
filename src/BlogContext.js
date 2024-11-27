import React from "react";
import { blogdata } from './blogdata';

const BlogContext = React.createContext();

function BlogProvider({ children }){
    
    const [posts, setPosts] = React.useState(blogdata);

    

    function updatePostState(slug, newState) {  
        // Buscamos el post que corresponde al slug y lo actualizamos
        const updatedPosts = posts.map((post) => {
        if (post.slug === slug) {
            // console.log(`Post found: ${post.slug}, updating state to ${newState}`);
            return { ...post, state: newState };
        }
        return post;
        
        });
        setPosts(updatedPosts); 
        console.log('Updated posts:', updatedPosts);
    }

    return(
        <BlogContext.Provider value={{ posts, updatePostState }} >
            {children}
        </BlogContext.Provider>
    )

}
// Custom hook
function useBlog() {
    return React.useContext(BlogContext);
}
export{BlogContext , BlogProvider, useBlog}
