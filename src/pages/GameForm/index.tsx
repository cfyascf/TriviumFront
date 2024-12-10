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
import { IMessage, IQuestion } from "./interfaces";
import { toast } from "react-toastify";

export const GameForm = () => {
  const [question, setQuestion] = useState<IQuestion>();
  const [time, setTime] = useState(60);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null); 
  const [isAnswered, setIsAnswered] = useState<boolean>(false); 
  const [show, setShow] = useState<boolean>(false);

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

  const handleRequest = async () => {
    try {
      console.log("QUESTION INDEX:", index);
      const response = await API.get(`/question/${questions[index]}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("@TOKEN")}`,
        },
      });
      console.log(`CURRENT QUESTION: ${response.data}`);
      setQuestion(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch question.");
      console.log(error);
    }
  };

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) { 
      setSelectedOptionIndex(index);
      setIsAnswered(true);
      setShow(true);
    }
  };


  const handleNext = () => {
      console.log("GAME FINISHED.");
      if(index >= questions.length - 1) {
          setIndex(0);
          websocket?.send("finish");
          navigate("/game/ranking");
      }

      setIndex(index + 1);
      handleRequest();
      websocket?.send("next");
  }

  const handleWebSocketMessages = () => {
      if (!websocket) {
          console.error("WebSocket not initialized");
          return;
      }

      websocket.onmessage = (message) => {
          try {
              const parsed: IMessage = JSON.parse(message.data);

              switch (parsed.subject) {
                  case "tick":
                      setTime(Number(parsed.value));
                      break;

                  case "next":
                      handleNext();
                      break;

                  // case "finish":
                  //     handleFinish();
                  //     break;

                  default:
                      console.warn("Unknown message subject:", parsed.subject);
              }
          } catch (err) {
              console.error("Error parsing WebSocket message:", err);
          }
      };
  };

  useEffect(() => {
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
              showAnswer={show}
              text={option.description}
              isRight={option.isRight}
              color={handleColor(index)}
              isSelected={selectedOptionIndex === index}
              onSelect={() => handleOptionSelect(index)}
              isDisabled={isAnswered} 
            />
            ))}
          </ul>
        </div>
      </div>
    </GamePage>
  );
};
