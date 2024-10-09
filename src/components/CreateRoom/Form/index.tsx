import styled from "./styles.module.sass";

export const Form = () => {
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
                <button>Cancel</button>
                <button>Create</button>
            </div>
        </div>
    );
}