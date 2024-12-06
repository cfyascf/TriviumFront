import { useContext, useEffect, useState } from 'react';
import styled from './styles.module.sass';
import { GameContext } from '../../../contexts/gameContext';

interface IOptionProps {
    text: string;
    color: "#00B5FF" | "#FF52A7" | "#25DC44" | "#FDD20D" | undefined;
}

const Option = ({ text, color }: IOptionProps) => {
    const [answeared, setAnsweared] = useState<boolean>(false);
    const { websocket } = useContext(GameContext);

    const handleAnswear = () => {
        setAnsweared(true);
        websocket?.send("answear");
    }

    useEffect(() => {
        console.log(answeared)
    })

    return (
        <li className={answeared != false ? styled.option : styled.clicked} style={{ backgroundColor: color }} onClick={handleAnswear}>
            {text}
        </li>
    );
}

export default Option;