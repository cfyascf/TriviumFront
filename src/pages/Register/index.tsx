import { RegisterContainer } from "../../components/Register/RegisterContainer";
import styled from "./styles.module.sass";
import brand from "/brand_name_yellow.png";

const Register = () => {
    return (
        <>
            <div className={styled.page}>
                <div className={styled.title_section}>
                    <div className={styled.title_container}>
                        <p className={styled.title}>Create your account on </p><img className={styled.brand} src={brand} alt="Brand" />
                        <p className={styled.description}>Just drop in your basic info in seconds and test your knowledge with Trivium!</p>
                    </div>
                    <div className={styled.img_section}>
                        <img className={styled.img} src="/mascote_pink.png" alt="Mascot" />
                    </div>
                </div>
                <div className={styled.form_section}>
                    <RegisterContainer/>
                </div>
            </div>
        </>
    );
}

export default Register;