import { GamePage } from "../../components/GamePage";
import background from "/background1.png";
import Option from "../../components/GameForm/Option";
import Question from "../../components/GameForm/Question";
import styled from "./styles.module.sass";
import API from "../../service/API";
import { useParams } from "react-router-dom";
import Timer from "../../components/GameForm/Timer";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/gameContext";

interface IOption {
    description: string,
    isRight: boolean,
}

interface IQuestion {
    title: string,
    formId: string,
    options: IOption[]
}

interface IMessage {
    subject: string,
    value: string
}

export const GameForm = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState<IQuestion>();
    const [time, setTime] = useState(60);
    const { websocket } = useContext(GameContext);
    
    const handleColor = (index: number) => {
        switch(index) {
            case 0:
                return "#00B5FF";

            case 1: 
                return "#FF52A7";
            
            case 2: 
                return "#25DC44";

            case 3: 
                return "#FDD20D"
        }
    }

    useEffect(() => {
        const handleRequest = async () => {
            try {
                const response = await API.get(`/question/${id}`, {
                    headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                }});
    
                setQuestion(response.data.data);
    
            } catch (error) {
                console.log(error)
            }
        }

        const handleTime = async() => {
            if(!websocket) {
                return;
            }

            websocket.onmessage = (message) => {
                const parsed: IMessage = JSON.parse(message.data);
                // console.log(message);

                switch(parsed.subject) {
                    case "timer_running":
                        setTime(Number(parsed.value));
                        // console.log(time);
                        break;

                    case "timer_finished":
                        return;
                }
            };
        }

        handleTime();
        handleRequest();
    }, [time]);

    return (
        <GamePage backgroundUrl={background}>
            <div className={styled.content}>
                <Timer sec={time}/>
                <Question text={question?.title} />
                <div className={styled.options_content}>
                    <ul className={styled.options}>
                        {
                            question?.options.map((option, index) => (
                                <Option key={index} text={option.description} color={handleColor(index)} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </GamePage>
    );
}
