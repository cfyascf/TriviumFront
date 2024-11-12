import { useState } from "react"
import styled from "./styles.module.sass"

interface ISelectBoxProps {
    selectedValue: number,
    setSelectedValue: React.Dispatch<React.SetStateAction<number>>
}

export const SelectBox = ({ selectedValue, setSelectedValue }: ISelectBoxProps) => {
    const [options, setOptions] = useState(false)

    const handleClick = (value: number) => {
        setSelectedValue(value)
        setOptions(!options)
    }

    return (
        <>
            <div className={styled.select_box}>
                <div onClick={() => setOptions(!options)} className={styled.box}> 
                    <p>{ selectedValue == 2 ? 'Two options' : 'Four options' }</p>
                    <span className="material-symbols-rounded">keyboard_arrow_down</span>
                </div>
                <div className={options ? styled.options_ : styled.hidden}>
                    <div onClick={() => handleClick(2)}><p>Two options</p></div>
                    <div onClick={() => handleClick(4)}><p>Four options</p></div>
                </div>
            </div>
        </>
    )
}