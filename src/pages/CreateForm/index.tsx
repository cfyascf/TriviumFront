import { useState } from "react"
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

export const CreateForm = () => {
    const [questions, setQuestions] = useState(1)
    const navigate = useNavigate()
    console.log(questions)

    const handleCancel = () => {
        navigate("/home")
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
                        Array.from({ length: questions }, (_, index) => (
                            <Question questions={questions} setQuestions={setQuestions} />
                        ))
                    }
                    <div className={styled.button_group}>
                        <button onClick={() => handleCancel()}>Cancel</button>
                        <button onClick={() => handleSend()}>Create</button>
                    </div>
                </div>
            </Page>
        </>
    )
}