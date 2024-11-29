import { LoginContainer } from "../../components/Login/LoginContainer";
import styled from "./styles.module.sass";
import brand from "/brand_name_yellow.png";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    return (
        <div className={styled.page}>
            <div className={styled.title_section}>
                <div className={styled.title_container}>
                    <p className={styled.title}>Welcome to </p><img className={styled.brand} src={brand} alt="Brand" />
                    <p className={styled.description}>Trivium is a platform to test yourself against your friends in a insane knowledge battle!</p>
                </div>
                <div className={styled.img_section}>
                    <img className={styled.img} src="/mascote_pink.png" alt="Mascot" />
                </div>
            </div>
            <div className={styled.form_section}>
                <LoginContainer/>
            </div>
        </div>
    );
}

export default Login;