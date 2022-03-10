import axios from "../../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const navigate = useNavigate()

    const logout = async () => {
        try {
            await axios.get('/logout');
            setUser()
            navigate('/login');
        } catch (error) {
            console.log(error.message);
        }
    }

    const checkLoginStatus = async () => {
        try {
            const { data } = await axios.get('/login');
            setUser(data.success)
            navigate('/')
        } catch (error) {
            navigate('/login');
        }
    }

    useEffect(() => {
        checkLoginStatus();
    }, [])


    const value = {
        user,
        setUser,
        logout
    }

    return <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
}

export default AuthContextProvider;
