import React from 'react';
import styled from './styles.module.sass';
import trophy from '/trofeu.png';

interface RankingItemProps {
  position: number;
  name: string;
  score: number;
  isFirst?: boolean;
}

export const RankingItem: React.FC<RankingItemProps> = ({ position, name, score, isFirst }) => {
  return (
    <div className={styled[`column${position}`]}>
      <div className={styled.icon}>
        {position}°
      </div>
      <h2>{name}</h2>
      <p>{score}</p>
      {isFirst && <img src={trophy} alt="Trophy" className={styled.trophy} />}
    </div>
  );
};