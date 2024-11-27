import styled from './styles.module.sass';

interface QuestionProps {
    text: string;
}

const Question = ({ text }: QuestionProps) => {
    return (
        <div className={styled.question}>
            <h1>{text}</h1>
        </div>
    );
}

export default Question;