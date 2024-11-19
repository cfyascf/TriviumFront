import { ReactNode, useContext, useEffect } from "react";
import styled from "./styles.module.sass";
import { GameContext } from "../../contexts/gameContext";
import API from "../../service/API";

interface IPageProps {
    children: ReactNode;
}

export const Page = ({ children } : IPageProps) => {
    return (
        <div className={styled.page}>
            { children }
        </div>
    );
}