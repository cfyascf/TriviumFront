import styled from "./styles.module.sass";

interface IProfileCardProps {
    fullname: string,
    email: string,
}

export const Card = ({ fullname, email } : IProfileCardProps) => {
    return (
        <div className={styled.card}>
            <div className={styled.content}>
                <h1 className={styled.title}> { fullname } </h1>
                {/* <h2> { form } </h2> */}
                <p> { email } </p>
            </div>
            <div className={styled.botton}>
                {/* <span className="material-symbols-rounded"> { icon } </span> */}
            </div>
        </div>
    );
}