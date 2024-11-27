import { GamePage } from "../../components/GamePage";
import background from "/background-emotes2.png";
import styled from "./styles.module.sass";
import trophy from "/trofeu.png";

export const RankingRoom = () => {

    return (
        <GamePage backgroundUrl={background}>
            <div className={styled.content}>
                <div  className={styled.formName}>
                    <h1>form name</h1>
                </div>

                <div className={styled.columns}>
                    <div className={styled.column1}>
                        <div className={styled.icon}>
                            2°
                        </div>
                        <h2>Fulaninho</h2>
                        <p>13</p>
                    </div>
                    <div className={styled.column2}>
                        <div className={styled.icon}>
                            1°
                        </div>
                        <h2>Dylandinho</h2>
                        <p>14</p>
                        <img src={trophy} alt="" className={styled.trophy} />
                    </div>
                    <div className={styled.column3}>
                        <div className={styled.icon}>
                            3°
                        </div>
                        <h2>Ciclaninho</h2>
                        <p>10</p>
                    </div>
                </div>
            </div>
        </GamePage>
    );
}
