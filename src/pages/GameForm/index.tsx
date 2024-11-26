import { GamePage } from "../../components/GamePage"
import background from "../../../public/background1.png"
import styled from "./styles.module.sass";

export const GameForm = () => {
    return (
            <GamePage backgroundUrl={background}>
                <div className={styled.content}>
                    <div className={styled.question}>
                        <h1>Which is the color of Napoleon's white horse?</h1>
                    </div>

                    <div className={styled.options_content}>
                        <ul className={styled.options}>
                            <li className={styled.option1}>1gdf </li>
                            <li className={styled.option2}>dsf sa1</li>
                            <li className={styled.option3}>1 fsafdsafs fsdfsafsdf fsafsaf</li>
                            <li className={styled.option4}>1 fsdfdsafsdfsafffffffffffsdfasfdsafdsafddsfsafsfsadfdsa ty9ijn90ren ioertjer rkerjtkllç</li>
                        </ul>
                    </div>
                </div>
            </GamePage>
    )
}