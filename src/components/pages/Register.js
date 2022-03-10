import { useState } from "react";

import axios from "../../config/axios";
import { useAuth } from "../contexts/AuthContext"

const Login = () => {
    const { setUser } = useAuth();

    const [error, setError] = useState();        

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('.form-input');

        const form = {}; 
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value;
        })

        try {
            const { data } = await axios.post('/register', form)
            console.log(data);
        } catch (error) {
            setError(error.message)
        }
    } 
    
    return <div id="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-input"/>
            <label htmlFor="login">Password</label>
            <input type="password" name="password" className="form-input"/>

            <input type={"submit"} />
        </form>
        { error  && <p>{error}</p> }
    </div>
    
}

export default Login;