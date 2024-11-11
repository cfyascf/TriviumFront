import { useEffect, useState } from "react";
import styled from "./styles.module.sass";
import { Card } from "../Card";
import { Filter } from "../Filter";
import API from "../../../service/API";
import { NoData } from "../../NoData";

interface IMatch {
    _id: string
    formId: IForm
    admId: string
    name: string
    score: IScore
}

interface IScore {
    _id: string
    points?: number
}

interface IForm {
    title: string
    description: string
    qty_questions: number
}

export const History = () => {

    const [matches, setMatches] = useState<IMatch[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await API.get(`/match?userid=${sessionStorage.getItem("@USERID")}`, {
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});

                    setMatches(Object.values(response.data.data))
    
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (    
        <div className={styled.history}>
            <div className={styled.header}>
                <p className={styled.title}>History</p>
                <Filter/>
            </div>
            <div className={styled.matches_container}>
                { 
                
                    matches.length > 0 ? 
                    
                    matches.map(match => (
                        <div className={styled.card} key={match._id}>
                            <Card title={match.name} description={match.formId.description} score={((!match.score?.points)? "0" : match.score?.points) +"/"+match.formId.qty_questions} time="08:34" icon="star" form={match.formId.title}/>
                        </div>
                    )) : 

                    <NoData/>
                }
            </div>
        </div>
    );
}