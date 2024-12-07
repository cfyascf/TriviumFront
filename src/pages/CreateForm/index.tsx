import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import styled from "./styles.module.sass"
import { Question } from "../../components/CreateForm/Question"
import { useNavigate } from "react-router-dom"

export interface IOption {
    right: boolean,
    desc: string,
    index: number
}

export interface IQuestion {
    desc: string,
    options: IOption[]
}

export const CreateForm = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const questions:IQuestion[] = [];
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/home")
    }

    const fillQuestions = (question: IQuestion, index: number) => {
        questions[index] = question;
    }

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
                        Array.from({ length: questionNumber }, (_, index) => (
                            <Question fillQuestions={fillQuestions} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} index={index}/>
                        ))
                    }
                    <div className={styled.button_group}>
                        <button onClick={() => handleCancel()}>Cancel</button>
                        {/* <button onClick={() => handleSend()}>Create</button> */}
                    </div>
                </div>
            </Page>
        </>
    )
}