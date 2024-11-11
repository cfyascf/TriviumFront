import { useNavigate } from "react-router-dom";
import InputField from "../../Login/Input";
import styled from "./styles.module.sass";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { RegisterData, RegisterResponse } from "../../../interfaces/register/register";
import API from "../../../service/API";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSend = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(password != repeatPassword)
            toast.error("The passwords do not match.");

        const data: RegisterData = {
            fullname,
            email,
            password
        };

        try {
            const response: RegisterResponse  = await API.post('/users', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            console.log(response);

            toast.success(response.data.message);
            navigate('/');
            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message.password[0]);
        }
    }

    return (
        <>
            <form onSubmit={handleSend}>
                <InputField 
                    type="text" 
                    label="Fullname" 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                    required 
                />
                
                <InputField 
                    type="email" 
                    label="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <InputField 
                    type="password" 
                    label="New password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <InputField 
                    type="password" 
                    label="Repeat the new password" 
                    value={repeatPassword} 
                    onChange={(e) => setRepeatPassword(e.target.value)} 
                    required 
                />
                <div className={styled.bottom_form}>
                    <div className={styled.form_button}>
                        <button className={styled.button} type="submit">Confirm</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;