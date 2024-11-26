import  React  from 'react'; 
import { Navigate, useNavigate } from 'react-router-dom';

const adminList = ['aguacaT', 'pepaFig', 'GominolaBear', 'maizner']
const moderatorList = ['ehunMonton', 'pipiriripi', 'maizner']

const AuthContext = React.createContext();

function AuthProvider({children}){
    const navigate = useNavigate();

    const [user, setUser] = React.useState(null)

    const login = ({username}) => {
        const isAdmin = adminList.includes(username);
        const isModerator = moderatorList.includes(username);

        if (isAdmin){
            setUser({ username, role: 'admin' })
        }else if (isModerator){
            setUser({ username, role: 'moderator' })
        }else {
            setUser({ username, role: 'unauthorized' }); 
        }
        
        navigate('/profile')
    };
    
    const logout = () => { 
        setUser(null)
        navigate('/')
    };

    const auth = { user, login, logout };

    return(
        <AuthContext.Provider value = {auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth; 
}

function AuthRoute(props) {
    const auth = useAuth(); 
    if (!auth.user){
        return  < Navigate to = '/login ' />
    }
    return props.children; 
}

export{
    AuthProvider,
    useAuth,
    AuthRoute
}