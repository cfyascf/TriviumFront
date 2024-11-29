import React from 'react';
import { RankingItem } from '../RankingItem';
import styled from './styles.module.sass';

const rankingData = [
  { position: 2, name: 'Fulaninho', score: 13 },
  { position: 1, name: 'Dylandinho', score: 14, isFirst: true },
  { position: 3, name: 'Ciclaninho', score: 10 }
];

export const Ranking: React.FC = () => {
  return (
    <div className={styled.columns}>
      {rankingData.map((item) => (
        <RankingItem
          key={item.position}
          position={item.position}
          name={item.name}
          score={item.score}
          isFirst={item.isFirst}
        />
      ))}
    </div>
  );
};
