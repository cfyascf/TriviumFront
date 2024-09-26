import { ReactNode } from "react";
import styled from "./styles.module.sass";

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