import styled from './styles.module.sass';

interface OptionProps {
    text: string;
    color: string;
}

const Option = ({ text, color }: OptionProps) => {
    return (
        <li className={styled.option} style={{ backgroundColor: color }}>
            {text}
        </li>
    );
}

export default Option;