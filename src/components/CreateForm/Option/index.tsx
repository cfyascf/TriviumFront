import { useEffect, useState } from "react"
import styled from "./styles.module.sass"
import { IOption } from "../../../pages/CreateForm"

interface IOptionProps {
    fillOptions: (option: IOption, index: number) => void,
    index: number
}

export const Option = ({ fillOptions, index }: IOptionProps) => {
    const [right, setRight] = useState<boolean>(false)
    const [desc, setDesc] = useState<string>('')

    useEffect(() => {
        const option: IOption = {
            right: right,
            desc: desc,
            index: index
        }
        
        fillOptions(option, index)
    }, [right, desc])

    const handleAnswer = (input_right: boolean | null, input_desc: string | null) => {
        console.log(input_desc, input_right)
        if(input_right != null) {
            setRight(input_right)
        }

        if(input_desc != null) {
            setDesc(input_desc)
        }
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