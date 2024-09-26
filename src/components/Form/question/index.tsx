import InputField from "../../Login/Input";
import styled from "./styles.module.sass"

const QuestionForm = ({ value, setValues }) => {
    
    return (
        <>
            <div className={styled.question}>
                    <InputField 
                        type="text" 
                        label="Question title" 
                        // value={value.question1.value} 
                        // onChange={(e) => setValues({...value, question1: {value}})} 
                        required 
                    />

                    <div>  
                        <div>
                            <div className={styled.option}>
                                <p>a.</p>
                                <InputField 
                                type="text" 
                                // value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                />
                            </div>
                            <div className={styled.option}>
                                <p>b.</p>
                                <InputField 
                                type="text" 
                                // value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                />
                            </div>
                            <div className={styled.option}>
                                <p>c.</p>
                                <InputField 
                                type="text" 
                                // value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                />
                            </div>
                            <div className={styled.option}>
                                <p>d.</p>
                                <InputField 
                                type="text" 
                                // value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                />
                            </div> 
                        </div>                      
                    </div>
                </div>
        </>
    );
}

export default QuestionForm;