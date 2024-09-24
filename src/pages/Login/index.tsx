import { useNavigate } from "react-router-dom";
import { requestHook } from "../../hooks/request.hook";
import styled from "./styles.module.sass";
import brand from "/brand_name_yellow.png";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
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
            // toast.success("Login successfully!");
            
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <div className={styled.page}>
            <div className={styled.title_section}>
                <div className={styled.title_container}>
                    <p className={styled.title}>Welcome to </p><img className={styled.brand} src={brand} alt="Brand" />
                    <p className={styled.description}>Trivium is a platform to test yourself against your friends in a insane knowledge battle!</p>
                </div>
                <div className={styled.img_section}>
                    <img className={styled.img} src="/mascote_pink.png" alt="Mascot" />
                </div>
            </div>
            <div className={styled.form_section}>
                <div className={styled.form_container}>
                    <div className={styled.signin_container}>
                        <h1 className={styled.form_title}>Sign In!</h1>
                        <p>Entra aí pô mó daorinha o bagulho, na moral!</p>
                    </div>
                    <form onSubmit={handleSend}>
                        <div className={styled.form_input}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                className={styled.input} 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                        <div className={styled.form_input}>
                            <label htmlFor="password">Password</label>
                            <input 
                                className={styled.input} 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </div>
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
                </div>
            </div>
        </div>
    );
}

export default Login;