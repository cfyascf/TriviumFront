import styled from "./styles.module.sass";

export const Form = () => {
    return (
        <div className={styled.form_container}>
            <input placeholder="Room name"/>
            <button>Create</button>
        </div>
    );
}