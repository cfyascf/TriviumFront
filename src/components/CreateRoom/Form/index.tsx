import { useEffect, useState } from "react";
import styled from "./styles.module.sass";
import API from "../../../service/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IForm {
    _id: string
    title: string
    description: string
    qty_questions: number
}

interface IMatchCreate {
    name: string
    formId: string
    admId: string
}

export const Form = () => {
    const [forms, setForms] = useState<IForm[]>([]);
    const [name, setName] = useState("");
    const [formId, setFormId] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await API.get(`/form`,{
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});

                    setForms(Object.values(response.data.data))

            } catch (error) {
                console.log(error)
            }
        }
        fetchForms();
    }, []);

    const handleSend = async () => {
        const admId = sessionStorage.getItem("@USERID");

        if (!admId) {
            console.error("Usuário não autenticado, admId não encontrado.");
            return; 
        }
        
        const data: IMatchCreate = {
            name, formId, admId
        };

        try {
            const response = await API.post('/match', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            toast.success("Room create successfully!");
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        navigate("/home")
    }

    return (
        <div className={styled.form_container}>
            <h1>Create room</h1>
            <div className={styled.input_container}>
                <p>Room name</p>
                <input placeholder="Room name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styled.input_container}>
                <p>Form</p>
                <select onChange={(e) => setFormId(e.target.value)} >
                <option disabled selected>Choose a form</option>
                    {forms.map(form => (
                        <option value={form._id} key={form._id}>{form.title}</option>
                    ))}
                </select>
            </div>
            <div className={styled.button_group}>
                <button onClick={() => handleCancel}>Cancel</button>
                <button onClick={() => handleSend}>Create</button>
            </div>
        </div>
    );
}