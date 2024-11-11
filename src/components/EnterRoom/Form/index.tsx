import { useState } from "react";
import styled from "./styles.module.sass";

export const Form = () => {
    const [pin, setPin] = useState("");

    // const handleSend = async () => {
    //     const userId = sessionStorage.getItem("@USERID");

    //     const data = { userId, matchId }

    //     try {
    //         const response = await API.post(`/match/adduser`,{
    //             headers: {
    //             'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
    //             }});

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <div className={styled.form_container}>
            <input 
                placeholder="Room name" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                required 
            />
            <button>Create</button>
        </div>
    );
}