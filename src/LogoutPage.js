import  React  from 'react'; 
import { useAuth } from './auth';

function LogoutPage () {

   const auth = useAuth(); 

   const handleLogout = (e) => {
      e.preventDefault();
      auth.logout()
      // console.log('chau')
  }
   return (
      <>
          <h1>LogOut</h1>
  
          <form onSubmit={handleLogout } >
  
              <label >quieres salir?</label>
             
               <button type='submit'>Salir</button>
  
          </form>
      </>
     )
}

export { LogoutPage}; 