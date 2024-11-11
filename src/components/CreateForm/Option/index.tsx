import { useState } from "react"
import styled from "./styles.module.sass"
import { IOption } from "../../../pages/CreateForm"

interface IOptionProps {
    handleSelect: (option: IOption) => void
}

export const Option = ({ handleSelect }: IOptionProps) => {
    const [right, setRight] = useState<boolean>(false)
    const [desc, setDesc] = useState<string>('')

    const handleAnswer = (input_right: boolean | null, input_desc: string | null) => {
        console.log(input_desc, input_right)
        if(input_right != null) {
            setRight(input_right)
        }

        if(input_desc != null) {
            setDesc(input_desc)
        }

        handleSelect({ right, desc })
    }

    return (
        <div className={styled.input_container}>
            <input 
                className={styled.checkbox} 
                type="checkbox" 
                onChange={() => handleAnswer(!right, null)}
            />
            
            <input 
                className={styled.field} 
                type="text" 
                placeholder="Option description here..."
                onChange={(e) => handleAnswer(null, e.target.value)}
            />
        </div>
    )
}