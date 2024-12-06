import { GamePage } from "../../components/GamePage";
import background from "/background1.png";
import Option from "../../components/GameForm/Option";
import Question from "../../components/GameForm/Question";
import styled from "./styles.module.sass";
import { useContext, useEffect, useState } from "react";
import API from "../../service/API";
import { GameContext } from "../../contexts/gameContext";
import { useParams } from "react-router-dom";

interface IOption {
    description: string,
    isRight: boolean,
}

interface IQuestion {
    title: string,
    formId: string,
    options: IOption[]
}

export const GameForm = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState<IQuestion>();
    
    const handleColor = (index: number) => {
        switch(index) {
            case 1:
                return "#00B5FF";

            case 2: 
                return "#FF52A7";
            
            case 3: 
                return "#25DC44";

            case 4: 
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

        handleRequest();
    }, []);

    return (
        <GamePage backgroundUrl={background}>
            <div className={styled.content}>
                <Question text={question?.title} />

                <div className={styled.options_content}>
                    <ul className={styled.options}>
                        {
                            question?.options.map((option, index) => (
                                <Option 
                                    key={index} 
                                    text={option.description} 
                                    color={handleColor(index)} 
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </GamePage>
    );
}
