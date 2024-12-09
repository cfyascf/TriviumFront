import { useNavigate, useParams } from "react-router-dom";
import styled from "./styles.module.sass";
import pp from "/profile_picture.png";
import API from "../../service/API";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/gameContext";
import { toast } from "react-toastify";
import { IMessage } from "../GameForm/interfaces";

interface IMatch {
    _id: string
    admId: string
    formId: string
    name: string
    pin: string
}

interface IUser {
    email: string
    fullname: string
    _id: string
}

export const WaitingRoom = () => {
    const { id } = useParams();
    const [users, setUsers] = useState<IUser[]>();
    const [currentMatch, setCurrentMatch] = useState<IMatch>();
    const { websocket, match, questions, setQuestions, setForm, index } = useContext(GameContext);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMatch = async () => {
            try {
                const response = await API.get(`/match?id=${id}`,{
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});
                    setUsers(Object.values(response.data.data.users));
                    setCurrentMatch(response.data.data.match);
                    setQuestions(response.data.data.questions);
                    setForm(response.data.data.form);

            } catch (error) {
                console.log(error)
                toast.error("Could not fetch match.");
            }
        }
        fetchMatch();
    }, [])

    const handleExit = async () => {
        const data = {
            'userId': sessionStorage.getItem('@USERID'),
            'matchId': match
        }

        try {
            await API.post('/match/remove', data, {
                headers: { 'Content-Type': 'application/json' },
            });
            
            if(websocket != undefined) {
                websocket.close(); 
            }

            navigate('/home');
        
        } catch(err) {
            toast.error("Failed to remove user from room.");
            console.log(`Could not remove user from room: ${err}`)
        }
    }

    const handleStart = () => {
        console.log(`TRYING TO START ON WEBSOCKET: ${websocket}`);
        console.log(`QUESTIONS: ${questions}`);
        console.log(`INDEX: ${index}`);
        if(websocket == undefined || !websocket.OPEN) {
            toast.error("You lost connection to the room.");
            navigate("/home");
        }

        websocket?.send("start");
    }

    const handleWebsocketMessages = () => {
        if(websocket == undefined || !websocket.OPEN) {
            toast.error("You lost connection to server.");
            console.log("Connection lost.");
            return;
        }

        websocket.onmessage = (message) => {
            try {
                const parsed: IMessage = JSON.parse(message.data);
                console.log("MESSAGE:", parsed);

                switch (parsed.subject) {
                    case "start":
                        navigate("/game/question"); 
                        break;

                    default:
                        console.warn("Unknown message subject:", parsed.subject);
                }
            } catch (err) {
                console.error("Error parsing WebSocket message:", err);
            }
        }
    }

    useEffect(() => {
        handleWebsocketMessages();
    }, []);

    return (
        <div className={styled.page}>
            <div className={styled.content_container}>
                <div className={styled.header}>
                    <h2>Room code</h2>
                    <h1>{currentMatch?.pin}</h1>
                </div>
                <div className={styled.content}>
                    <div className={styled.players}>
                        <h2>Players</h2>

                        <div className={styled.card_container}>
                            {users?.map(user => (
                                <div key={user._id} className={styled.card}>
                                    <img className={styled.pp} src={pp}></img>
                                    <h2>{user.fullname}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styled.button_group}>
                        <button onClick={() => handleExit()}>Exit</button>
                        <button onClick={() => handleStart()}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
}