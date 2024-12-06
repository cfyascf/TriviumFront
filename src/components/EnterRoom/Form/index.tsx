import { useContext, useState } from "react";
import styled from "./styles.module.sass";
import API from "../../../service/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/gameContext";

export const Form = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const { setMatch, setWebSocket, websocket } = useContext(GameContext);
    

    const joinRoom = async () => {
        const userId = sessionStorage.getItem("@USERID");
        const data = { userId, pin };

        try {
            const response = await API.post(`/match/add`, data, {
                headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
            }});

            setMatch(response.data.data.match);

            toast.success(response.data.data.message);
            navigate(`/waiting-room/${response.data.data.match}`)

        } catch (error: any) {
            toast.error(error.response?.data?.message);
        }
    }

    const createWebSocket = () => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.addEventListener("open", () => {
            setWebSocket(ws);
            console.log(websocket)
            joinRoom();
        })

        ws.addEventListener("message", function connect(msg) {
            const response = JSON.parse(msg.data);

            switch(response.type) {
                case "connection":
                    ws.removeEventListener("message", connect);
                    break;
            }
        })
    }

    return (
        <div className={styled.form_container}>
            <input 
                placeholder="Room name" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                required 
            />
            <button onClick={createWebSocket}>Join</button>
        </div>
    );
}