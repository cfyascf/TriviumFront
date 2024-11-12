import { useState } from "react"
import { SelectBox } from "../SelectBox"
import { TextInput } from "../TextInput"
import { Option } from "../Option"
import styled from "./styles.module.sass"

export interface IOption {
    right: boolean,
    desc: string,
    index: number
}

interface IQuestionProps {
    questions: number,
    setQuestions: React.Dispatch<React.SetStateAction<number>>
}

export const Question = ({ questions, setQuestions }: IQuestionProps) => {
    const [selectedValue, setSelectedValue] = useState<number>(4)
    const [options, setOptions] = useState<IOption[]>([])

    const handleSelect = (option: IOption) => {
        setOptions([...options, option])
    }

    return (
        <div className={styled.question_container}>
            <div className={styled.question}>
                <div className={styled.header}>
                    <TextInput label="Question description here..." />
                    <SelectBox selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                </div>
                <div className={styled.options}>
                    {
                        Array.from({ length: selectedValue }, (_, index) => (
                            <Option handleSelect={{ handleSelect, index }} />
                        ))
                    }
                </div>
            </div>
            <div className={styled.menu}>
                <div onClick={() => setQuestions(++questions)}><span className="material-symbols-rounded">add_circle</span></div>
                <div onClick={() => setQuestions(--questions)}><span className="material-symbols-rounded">delete</span></div>
            </div>
        </div>
    )
}