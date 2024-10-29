import LoginForm from "../LoginForm";
import styled from "./styles.module.sass";

export const LoginContainer = () => {
    return (
        <div className={styled.form_container}>
            <div className={styled.signin_container}>
                <h1 className={styled.form_title}>Sign In</h1>
                <p>Enter your info to log in and test yourself!</p>
            </div>
            <LoginForm />
        </div>
    );
}