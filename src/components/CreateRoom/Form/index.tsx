import { Link, useNavigate } from "react-router-dom";
import styled from "./styles.module.sass";

export const Form = () => {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate('/home')
    }
    return (
        <div className={styled.form_container}>
            <h1>Create room</h1>
            <div className={styled.input_container}>
                <p>Room name</p>
                <input placeholder="Room name"/>
            </div>
            <div className={styled.input_container}>
                <p>Form</p>
                <select>
                    <option>History</option>
                    <option>Geography</option>
                    <option>Math</option>
                </select>
            </div>
            <div className={styled.button_group}>
                <button onClick={() => handleCancel()}>Cancel</button>
                <button>Create</button>
            </div>
        </div>
    );
}