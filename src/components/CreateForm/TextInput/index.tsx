import styled from "./styles.module.sass"

interface ITextInputProps {
    label : string,
    setQuestionDescription: React.Dispatch<React.SetStateAction<string>>
}

export const TextInput = ({ label, setQuestionDescription } : ITextInputProps) => {
    return (
        <input placeholder={ label } className={styled.input} onChange={(e) => setQuestionDescription(e.target.value)}/>
    )
}