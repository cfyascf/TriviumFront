import { useState } from "react"
import { Option } from "../../components/CreateForm/Option"
import { TextInput } from "../../components/CreateForm/TextInput"
import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import { SelectBox } from "../../components/CreateForm/SelectBox"
import styled from "./styles.module.sass"
import { Question } from "../../components/CreateForm/Question"

export interface IOption {
    right: boolean,
    desc: string,
    index: number
}

export const CreateForm = () => {
    const [questions, setQuestions] = useState(1) 
    console.log(questions)

    return (
        <>
            <Navbar />
            <Page>
                <div className={styled.content}>
                    <h1 className={styled.title}>Create form</h1>
                    <div className={styled.data}>
                        <input className={styled.title_input} type="text" placeholder="Form title here.." />
                        <input className={styled.subtitle_input} type="text" placeholder="Form description here..." />
                    </div>
                    {
                        Array.from({ length: questions }, (_, index) => (
                            <Question questions={questions} setQuestions={setQuestions} />
                        ))
                    }
                </div>
            </Page>
        </>
    )
}