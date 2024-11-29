import React from 'react';
import { GamePage } from "../../components/GamePage";
import background from "/background-emotes2.png";
import { Ranking } from '../../components/RankingRoom/Ranking';
import styled from "./styles.module.sass";

export const RankingRoom: React.FC = () => {
  return (
    <GamePage backgroundUrl={background}>
      <div className={styled.content}>
        <div className={styled.formName}>
          <h1>form name</h1>
        </div>
        <Ranking />
      </div>
    </GamePage>
  );
};
