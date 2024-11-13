import { ReactNode } from "react";
import styled from "./styles.module.sass";

interface IGamePageProps {
    children: ReactNode,
    backgroundUrl: string
}

export const GamePage = ({ children, backgroundUrl } : IGamePageProps) => {
    const style = {
        backgroundImage: `url(${backgroundUrl})`,
      };

    return (
        <div className={styled.page} style={style}>
            { children }
        </div>
    )
}