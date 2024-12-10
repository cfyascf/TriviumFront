import { GamePage } from "../../components/GamePage";
import styled from "./styles.module.sass";
import background from "/background-emotes2.png";

interface RankingGeralRoomProps {
  position: number;
}

export const  RankingGeralRoom: React.FC<RankingGeralRoomProps>  = () => {

    const getColor = (position: number) => {
        if (position === 1) {
          return styled.gold;  
        } else if (position === 2) {
          return styled.silver;
        } else if (position === 3) {
          return styled.bronze; 
        }
        return styled.default;
      };

  return (
    <GamePage backgroundUrl={background}>
      <div className={styled.content}>
        <h1 className={styled.title}>Form name</h1>

        <div className={styled.people}>
          Fullname
          <div className={`${styled.position} ${getColor(1)}`}> {/* substituir por position */}
            {1}
          </div>
        </div>
      </div>
    </GamePage>
  );
};
