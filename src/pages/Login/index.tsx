import styled from "./styles.module.sass";
import brand from "/brand_name_yellow.png";

const Login = () => {
    return (
        <div className={styled.page}>
            <div className={styled.title_section}>
                <div className={styled.title_container}>
                    <p className={styled.title}>Welcome to </p><img className={styled.brand} src={brand}></img>
                    <p className={styled.description}>Trivium is a platform to test yourself against your friends in a insane knowledge battle!</p>
                </div>
                <div className={styled.img_section}>
                    <img className={styled.img} src="/mascote_pink.png" alt="" />
                </div>
            </div>
            <div className={styled.form_section}>
                <div className={styled.form_container}>
                    <div className={styled.signin_container}>
                        <h1 className={styled.form_title}>Sign In!</h1>
                        <p>Entra aí pô mó daorinha o bagulho, na moral!</p>
                    </div>
                    <form action="">
                        <div className={styled.form_input}>
                            <label htmlFor="">E-mail</label>
                            <input className={styled.input} type="email" />
                        </div>
                        <div className={styled.form_input}>
                            <label htmlFor="">Password</label>
                            <input className={styled.input} type="password" name="" id="" />
                        </div>
                        <div className={styled.bottom_form}>
                            <div className={styled.signup_container}>
                                <p className={styled.question}>Don't have an account?</p>
                                <p className={styled.signup_link}>Sign up</p>
                            </div>
                            <div className={styled.form_button}>
                                <button className={styled.button}>Start</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;