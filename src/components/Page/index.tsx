import { ReactNode, useContext, useEffect } from "react";
import styled from "./styles.module.sass";
import { GameContext } from "../../contexts/gameContext";
import API from "../../service/API";

interface IPageProps {
    children: ReactNode;
}

export const Page = ({ children } : IPageProps) => {
    const { websocket, match } = useContext(GameContext);

    const handleBeforeUnload = async () => {
        const data = {
            'userId': sessionStorage.getItem('@USERID'),
            'matchId': match
        }

        try {
            const response = await API.post('/match/remove', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (websocket != undefined && websocket.readyState === WebSocket.OPEN) {
                websocket.close(); 
            }
        } catch(err) {
            console.log(`Could not remove user from room: ${err}`)
        }
    };

    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    
    return (
        <div className={styled.page}>
            { children }
        </div>
    );
}