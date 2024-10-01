import { Link, useNavigate } from "react-router-dom";
import styled from "./styled.module.sass";
import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from "../Input";
import { LoginData } from "../../../interfaces/login/login";
import API from "../../../service/API";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSend = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: LoginData = {
            email,
            password
        };

        try {
            const response = await API.post('/auth', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            const { user, token } = response.data;
            
        console.log(response)

            sessionStorage.setItem("@USERID", user._doc._id);
            sessionStorage.setItem("@USERNAME", user._doc.fullname);
            sessionStorage.setItem("@USEREMAIL", user._doc.email);
            sessionStorage.setItem("@TOKEN", token);

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
                        <Link to={'/register'}><p className={styled.signup_link}>Sign up</p></Link>
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