import RegisterForm from "../RegisterForm";
import styled from "./styles.module.sass";

export const RegisterContainer = () => {
    return (
        <div className={styled.form_container}>
            <div className={styled.signin_container}>
                <h1 className={styled.form_title}>Sign Up</h1>
                <p>Enter your info to get the fun started!</p>
            </div>
            <RegisterForm />
        </div>
    );
}