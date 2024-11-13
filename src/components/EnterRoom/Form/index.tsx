import { useContext, useState } from "react";
import styled from "./styles.module.sass";
import API from "../../../service/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/gameContext";

export const Form = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const { match, questions, index, setMatch, setWebSocket, setQuestions, setIndex } = useContext(GameContext);
    console.log(setWebSocket)
    

    const joinRoom = async () => {
        const userId = sessionStorage.getItem("@USERID");
        const data = { userId, pin };

        try {
            const response = await API.post(`/match/add`, data, {
                headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
            }});

            setMatch(response.data.data.match);
            setQuestions(response.data.data.questions);
            setIndex(0);

            toast.success(response.data.data.message);
            navigate(`/waiting-room/${response.data.data.match}`)

        } catch (error: any) {
            toast.error(error.response?.data?.message);
        }
    }

    const createWebSocket = () => {
        const ws = new WebSocket("ws://localhost:8080");
        console.log(ws)

        ws.addEventListener("open", () => {
            console.log(setWebSocket)
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