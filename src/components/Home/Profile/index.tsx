import { Card } from "../Card";
import styled from "./styles.module.sass";
import pp from "/profile_picture.png";

export const Profile = () => {
    return (
        <div className={styled.profile}>
            <div className={styled.user}>
                <img src={pp} className={styled.profile_picture}></img>
                <div className={styled.data}>
                    <h1 className={styled.name}>Name Lastname</h1>
                    <p>email@gmail.com</p>
                </div>
                <div className={styled.achievements}>
                    <p>Achievements</p>
                    <div className={styled.nav}>
                        <div className={styled.botton}><span className="material-symbols-rounded">hotel_class</span></div>
                        <div className={styled.botton}><span className="material-symbols-rounded">Draw</span></div>
                        <div className={styled.botton}><span className="material-symbols-rounded">cardio_load</span></div>
                    </div>
                </div>
            </div>
            <div className={styled.cards}>
                <div className={styled.card_container}>
                    <p className={styled.title}>Best match</p>
                    <Card title="Best performance" description="Match group known as Challengers" score="20/45" time="15:45" icon="trophy"/>
                </div>
                <div className={styled.card_container}>
                    <p className={styled.title}>Last match</p>
                    <Card title="Last match" description="Match group known as Fighters" score="20/50" time="15:45" icon="military_tech"/>
                </div>
            </div>
        </div>
    );
}