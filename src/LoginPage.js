import  React  from 'react'; 
import { useAuth } from './auth';

function LoginPage () {
    const auth = useAuth(); 
    const [username, setUsername] = React.useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login({username})
    //    console.log('desde login', username)
    }

   return (
    <>
        <h1>Login</h1>

        <form onSubmit={handleLogin } >

            <label >Escribe tu nombre de usuario</label>
            <input
                value={username}
                onChange={ e => setUsername(e.target.value)}
             />
             <button type='submit'>Entrar</button>

        </form>
    </>
   )
}

export { LoginPage}; 