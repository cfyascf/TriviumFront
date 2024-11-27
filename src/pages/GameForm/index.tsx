import { GamePage } from "../../components/GamePage";
import background from "/background1.png";
import Option from "../../components/GameForm/Option";
import Question from "../../components/GameForm/Question";
import styled from "./styles.module.sass";

export const GameForm = () => {
    const options = [
        { text: "1gdf", color: "#00B5FF" },
        { text: "dsf sa1", color: "#FF52A7" },
        { text: "1 fsafdsafs fsdfsafsdf fsafsaf", color: "#25DC44" },
        { text: "1 fsdfdsafsdfsafffffffffffsdfasfdsafdsafddsfsafsfsadfdsa ty9ijn90ren ioertjer rkerjtkllç", color: "#FDD20D" }
    ];

    return (
        <GamePage backgroundUrl={background}>
            <div className={styled.content}>
                <Question text="Which is the color of Napoleon's white horse?" />
                <div className={styled.options_content}>
                    <ul className={styled.options}>
                        {options.map((option, index) => (
                            <Option key={index} text={option.text} color={option.color} />
                        ))}
                    </ul>
                </div>
            </div>
        </GamePage>
    );
}
