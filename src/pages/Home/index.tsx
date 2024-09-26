import Navbar from "../../components/Navbar";
import { Profile } from "../../components/Home/Profile";
import { History } from "../../components/Home/History";
import { Page } from "../../components/Page";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Page>
                <Profile/>
                {/* <History/> */}
            </Page>
        </>
    );
}

export default Home;