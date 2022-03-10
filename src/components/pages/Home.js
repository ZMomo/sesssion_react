import { useAuth } from '../contexts/AuthContext'


const Home = () => {
    const { user, logout } = useAuth();

    return user ? 
        <div>
            <p>Bonjour {user.email}</p><br />
            <button onClick={logout}>Logout</button>
        </div> 
        : <div>Connectez vous</div>
}

export default Home;