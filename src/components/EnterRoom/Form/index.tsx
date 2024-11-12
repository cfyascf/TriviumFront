import { useState } from "react";
import styled from "./styles.module.sass";
import API from "../../../service/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const handleSend = async () => {
        const userId = sessionStorage.getItem("@USERID");
        const data = { userId, pin }

        try {
            const response = await API.post(`/match/adduser`, data, {
                headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
            }});
            
            toast.success(response.data.data.message);
            navigate(`/waiting-room/${response.data.data.match}`)

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <div className={styled.form_container}>
            <input 
                placeholder="Room name" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                required 
            />
            <button onClick={handleSend}>Create</button>
        </div>
    );
}