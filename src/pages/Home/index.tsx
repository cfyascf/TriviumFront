import styled from "./styles.module.sass";
import Navbar from "../../components/Navbar";
import { Profile } from "../../components/Home/Profile";
import { History } from "../../components/Home/History";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className={styled.page}>
                <Profile/>
                <History/>
            </div>
        </>
    );
}

export default Home;