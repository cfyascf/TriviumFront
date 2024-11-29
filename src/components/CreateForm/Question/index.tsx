import { useEffect, useState } from "react"
import { SelectBox } from "../SelectBox"
import { TextInput } from "../TextInput"
import { Option } from "../Option"
import styled from "./styles.module.sass"
import { IQuestion } from "../../../pages/CreateForm"

export interface IOption {
    right: boolean,
    desc: string,
    index: number
}

interface IQuestionProps {
    fillQuestions: (question: IQuestion, index: number) => void,
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    questionNumber: number,
    index: number
}

export const Question = ({ fillQuestions, setQuestionNumber, questionNumber, index }: IQuestionProps) => {
    const [questionDescription, setQuestionDescription] = useState("")
    const [selectedValue, setSelectedValue] = useState<number>(4)
    
    const options: IOption[] = []

    const fillOptions = (option: IOption, index: number) => {
        options[index] = option
        // const question: IQuestion = {
        //     desc: questionDescription,
        //     options: options
        // }
        // console.log(question)
    }

    useEffect(() => {
        const question: IQuestion = {
            desc: questionDescription,
            options: options
        }

        // console.log(question)

        fillQuestions(question, index)
    }, [questionDescription])

    return (
        <div className={styled.question_container}>
            <div className={styled.question}>
                <div className={styled.header}>
                    <TextInput label="Question description here..." setQuestionDescription={setQuestionDescription}/>
                    <SelectBox selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                </div>
                <div className={styled.options}>
                    {
                        Array.from({ length: selectedValue }, (_, index) => (
                            <Option fillOptions={fillOptions} index={index}/>
                        ))
                    }
                </div>
            </div>
            <div className={styled.menu}>
                <div onClick={() => setQuestionNumber(++questionNumber)}><span className="material-symbols-rounded">add_circle</span></div>
                <div onClick={() => setQuestionNumber(--questionNumber)}><span className="material-symbols-rounded">delete</span></div>
            </div>
        </div>
    )
}