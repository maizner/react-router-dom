import  React  from 'react'; 
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

function LoginPage () {
    const auth = useAuth(); 
    const [username, setUsername] = React.useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login({username})
    };

    if (auth.user) {
        return <Navigate to = '/profile' />
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