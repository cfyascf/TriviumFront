import styled from "./styles.module.sass";
import Navbar from "../../components/Navbar";
import pp from "/profile_picture.png";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className={styled.page}>
                <div className={styled.profile}>
                    <div className={styled.user}>

                        <img src={pp} className={styled.profile_picture}></img>
                        <div className={styled.data}>
                            <h1 className={styled.name}>Name Lastname</h1>
                            <p>email@gmail.com</p>
                        </div>
                    </div>
                    <div className={styled.nav}>
                        <div className={styled.button}><span className="material-symbols-outlined">Add</span></div>
                        <div className={styled.button}><span className="material-symbols-outlined">Draw</span></div>
                        <div className={styled.button}><span className="material-symbols-outlined">Edit</span></div>
                    </div>
                </div>
                <div className={styled.history}>

                </div>
            </div>
        </>
    );
}

export default Home;