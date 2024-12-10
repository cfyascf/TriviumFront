import { useContext } from "react";
import styled from "./styles.module.sass";
import { GameContext } from "../../../contexts/gameContext";
import right from "/right.png";
import wrong from "/wrong.png";

interface IOptionProps {
  text: string;
  isRight: boolean;
  color: "#00B5FF" | "#FF52A7" | "#25DC44" | "#FDD20D" | undefined;
  isSelected: boolean;
  onSelect: () => void;
  isDisabled: boolean;
  showAnswer: boolean;
}

const Option = ({
  isRight,
  text,
  showAnswer,
  color,
  isSelected,
  onSelect,
  isDisabled,
}: IOptionProps) => {
  const { websocket } = useContext(GameContext);

  const handleClick = () => {
    if (!isDisabled) {
      onSelect();
    }
  };

  return (
    <div>
      <li
        className={isSelected ? styled.clicked : styled.option}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {text}
        {showAnswer && (
          <img
            className={styled.trueOfFalse}
            src={isRight ? right : wrong}
            alt={isRight ? "Resposta Correta" : "Resposta Errada"}
          />
        )}
      </li>
    </div>
  );
};

export default Option;
