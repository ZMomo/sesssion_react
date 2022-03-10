import { useAuth } from "../contexts/AuthContext";

const ProtectedPage = () => {
    
    const { logout } = useAuth();

    return <div>
        <h1>Page protégée</h1>

        <p>
            Ceci est une page protégée
        </p>

        <button onClick={logout}>Logout</button>

    </div>
}

export default ProtectedPage;
