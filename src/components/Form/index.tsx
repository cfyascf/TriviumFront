import { useState } from "react";
import InputField from "../Login/Input";
import QuestionForm from "./question";
import styled from "./styles.module.sass";

const Form = () => {
    const [value, setValues] = useState({
        question1: { value: ''}
    });
    const [questionForm, setQuestionForm] = useState([<QuestionForm value={value} setValues={setValues}/>]); 

    function RenderQuestionsForm(){
        return questionForm.map(Question => {return Question})
    }

    function addQuestion(){
        setQuestionForm([...questionForm, <QuestionForm value={value} setValues={setValues}/>])
    }

    return (
        <>
            <form action="">
                <InputField 
                        type="text" 
                        label="Form title" 
                        // value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                <InputField 
                    type="text" 
                    label="Description" 
                    // value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <RenderQuestionsForm />
                <button className={styled.add} onClick={addQuestion}>+</button>
            </form>
        </>
    );
}

export default Form;