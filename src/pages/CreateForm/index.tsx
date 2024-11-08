import { useState } from "react"
import { Option } from "../../components/CreateForm/Option"
import { TextInput } from "../../components/CreateForm/TextInput"
import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import { SelectBox } from "../../components/CreateForm/SelectBox"
import styled from "./styles.module.sass"

export interface IOption {
    right: boolean,
    desc: string,
    index: number
}

export const CreateForm = () => {
    const [selectedValue, setSelectedValue] = useState<number>(4)
    const [options, setOptions] = useState<IOption[]>([])

    const handleSelect = (option: IOption) => {
        setOptions([...options, option])
    }

    return (
        <>
            <Navbar/>
            <Page>
                <div className={styled.content}>
                    <h1 className={styled.title}>Create form</h1>
                    <div className={styled.data}>
                        <input className={styled.title_input} type="text" placeholder="Form title here.."/>
                        <input className={styled.subtitle_input} type="text" placeholder="Form description here..."/>
                    </div>
                    <div className={styled.question_container}>
                        <div className={styled.question}>
                            <div className={styled.header}>
                                <TextInput label="Question description here..."/>
                                <SelectBox selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
                            </div>
                            <div className={styled.options}>
                                {
                                    Array.from({ length: selectedValue }, (_, index) => (
                                        <Option handleSelect={{handleSelect, index}}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </Page>
        </>
    )
}