import { GamePage } from "../../components/GamePage";
import background from "/background1.png";
import Option from "../../components/GameForm/Option";
import Question from "../../components/GameForm/Question";
import styled from "./styles.module.sass";
import API from "../../service/API";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/GameForm/Timer";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/gameContext";

interface IOption {
    description: string,
    isRight: boolean,
}

interface IQuestion {
    question: IQuestionData,
    options: IOption[]
}

interface IQuestionData {
    _id: string,
    title: string,
    formId: string
}

interface IMessage {
    subject: string,
    value: string
}

export const GameForm = () => {
    const [question, setQuestion] = useState<IQuestion>();
    const [time, setTime] = useState(60);
    const { websocket, setIndex, index, questions } = useContext(GameContext);
    const navigate = useNavigate();

    const handleColor = (index: number) => {
        switch (index) {
            case 0:
                return "#00B5FF";
            case 1:
                return "#FF52A7";
            case 2:
                return "#25DC44";
            case 3:
                return "#FDD20D";
        }
    };

    useEffect(() => {
        const handleRequest = async () => {
            try {
                console.log(questions[index]);
                const response = await API.get(`/question/${questions[index]}`, {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    },
                });

                console.log(response.data);
                setQuestion(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        const handleWebSocketMessages = () => {
            if (!websocket) {
                console.error("WebSocket not initialized");
                return;
            }

            websocket.onmessage = (message) => {
                try {
                    const parsed: IMessage = JSON.parse(message.data);
                    console.log("WebSocket message received:", parsed);

                    switch (parsed.subject) {
                        case "tick":
                            setTime(Number(parsed.value)); 
                            break;

                        case "finish":
                            console.log("Game finished.");

                            if(index >= questions.length) {
                                setIndex(0);
                                navigate("/game/ranking");
                            }

                            setIndex(index + 1);
                            console.log(index);
                            handleRequest();
                            websocket.send("start");
                            break;

                        default:
                            console.warn("Unknown message subject:", parsed.subject);
                    }
                } catch (err) {
                    console.error("Error parsing WebSocket message:", err);
                }
            };
        };

        handleRequest();
        handleWebSocketMessages();

        return () => {
            if (websocket) {
                websocket.onmessage = null; 
            }
        };
    }, [websocket, index]); 

    return (
        <GamePage backgroundUrl={background}>
            <div className={styled.content}>
                <Timer sec={time} />
                <Question text={question?.question.title} />
                <div className={styled.options_content}>
                    <ul className={styled.options}>
                        {question?.options.map((option, index) => (
                            <Option
                                key={index}
                                text={option.description}
                                color={handleColor(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </GamePage>
    );
};
