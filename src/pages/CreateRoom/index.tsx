import { Form } from "../../components/CreateRoom/Form";
import styled from "./styles.module.sass";
import brand_name from "/brand_name_w&y.png";

export const CreateRoom = () => {
    return (
        <div className={styled.page}>
            <img className={styled.title} src={brand_name}></img>
            <Form/>
        </div>
    );
}