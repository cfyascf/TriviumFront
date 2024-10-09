import styled from "./styles.module.sass";
import pp from "/profile_picture.png";

export const WaitingRoom = () => {
    return (
        <div className={styled.page}>
            <div className={styled.content_container}>
                <div className={styled.header}>
                    <h2>Room code</h2>
                    <h1>123 456</h1>
                </div>
                <div className={styled.players}>
                    <h2>Players</h2>
                    <div className={styled.card_container}>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                        <div className={styled.card}>
                            <img className={styled.pp} src={pp}></img>
                            <h2>Fullname</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}