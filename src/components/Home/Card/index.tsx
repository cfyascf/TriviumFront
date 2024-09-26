import styled from "./styles.module.sass";

interface IProfileCardProps {
    title: string,
    description: string,
    score: string,
    time: string,
    icon: string
}

export const Card = ({ title, description, score, time, icon } : IProfileCardProps) => {
    return (
        <div className={styled.card}>
            <div className={styled.content}>
                <h1 className={styled.title}> { title } </h1>
                <p> { description } </p>
                <div className={styled.details}>
                    <p>Score: { score } </p>
                    <p>|</p>
                    <p>Time: { time } </p>
                </div>
            </div>
            <div className={styled.botton}>
                <span className="material-symbols-rounded"> { icon } </span>
            </div>
        </div>
    );
}