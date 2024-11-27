import { ReactNode } from "react";
import styled from "./styles.module.sass";
import brand from "/brand_name_w&y.png";

interface IGamePageProps {
    children: ReactNode,
    backgroundUrl: string
}

export const GamePage = ({ children, backgroundUrl } : IGamePageProps) => {
    const style = {
        backgroundImage: `url(${backgroundUrl})`,
      };

    return (
        <>  
            <img src={brand} alt="" className={styled.brand} />
            <div className={styled.page} style={style}>
                { children }
            </div>
        </>
    )
}