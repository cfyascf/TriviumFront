import styled from "./styles.module.sass"

interface ICheckboxProps {
    label: string
}

export const Checkbox = ({ label } : ICheckboxProps) => {
    return (
        <div className={styled.input}>
            <input type="checkbox"/>
            <label> { label } </label>
        </div>
    )
}