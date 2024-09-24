import { useNavigate } from "react-router-dom";
import { requestHook } from "../../../hooks/request.hook";
import styled from "./styled.module.sass";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from "../Input";

const LoginForm = () => {
    const { handleRequest } = requestHook();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSend = async (e: any) => {
        e.preventDefault();

        const data = {
            email,
            password
        };

        try {
            const response = await handleRequest('/auth', 'POST', data);
            console.log(response);

            sessionStorage.setItem("@USERID", response.data.user._doc._id);
            sessionStorage.setItem("@USERNAME", response.data.user._doc.fullname);
            sessionStorage.setItem("@USEREMAIL", response.data.user._doc.email);
            sessionStorage.setItem("@TOKEN", response.data.token);

            toast.success("Login successfully!");
            navigate('/home');
            
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSend}>

                <InputField 
                    type="email" 
                    label="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                
                <InputField 
                    type="password" 
                    label="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <div className={styled.bottom_form}>
                    <div className={styled.signup_container}>
                        <p className={styled.question}>Don't have an account?</p>
                        <p className={styled.signup_link}>Sign up</p>
                    </div>
                    <div className={styled.form_button}>
                        <button className={styled.button} type="submit">Start</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginForm;