import styled from "./styles.module.sass";

export const Login = () => {
    return (
        <div className={styled.page}>
            <div className={styled.title_section}>
                <div className={styled.title_container}>
                    <p className={styled.title}>Welcome to </p><p className={styled.title}><span className={styled.highlight}>Trivium</span>!</p>
                    <p className={styled.description}>Trivium is a platform to test yourself against your friends in a insane knowledge battle!</p>
                </div>
            </div>
            <div className={styled.form_section}>
                <div className={styled.form_container}>
                    <div>
                        <h1 className={styled.form_title}>Sign Up!</h1>
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
                        <div className={styled.form_button}>
                            <button className={styled.button}>Start</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}