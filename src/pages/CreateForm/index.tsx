import { Checkbox } from "../../components/CreateForm/Checkbox"
import { TextInput } from "../../components/CreateForm/TextInput"
import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import styled from "./styles.module.sass"

export const CreateForm = () => {
    return (
        <>
            <Navbar/>
            <Page>
                <div className={styled.content}>
                    <h1 className={styled.title}>Create form</h1>
                    <div className={styled.data}>
                        <h1>Form title</h1>
                        <p>Form description</p>
                    </div>
                    <div>
                        <div className={styled.question}>
                            <div className={styled.header}>
                                <TextInput label="Insira aqui sua pergunta"/>
                                <div>Two Options</div>
                            </div>
                            <div className={styled.options}>
                                <Checkbox label="Option 1"/>
                                <Checkbox label="Option 2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    )
}