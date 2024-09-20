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

                </div>
            </div>
        </div>
    );
}