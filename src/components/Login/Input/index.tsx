import React from 'react';
import styled from './styled.module.sass';

interface InputFieldProps {
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, label, value, onChange, required }) => {
    return (
        <div className={styled.form_input}>
            <label>{label}</label>
            <input 
                className={styled.input}
                type={type} 
                value={value}
                onChange={onChange} 
                required={required} 
            />
        </div>
    );
};

export default InputField;
