import styled from "./styles.module.sass"

interface ITextInputProps {
    label : string
}

export const TextInput = ({ label } : ITextInputProps) => {
    return (
        <input placeholder={ label } className={styled.input}/>
    )
}