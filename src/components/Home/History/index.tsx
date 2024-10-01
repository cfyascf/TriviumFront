import { useEffect, useState } from "react";
import styled from "./styles.module.sass";
import { Card } from "../Card";
import { Filter } from "../Filter";
import API from "../../../service/API";

export const History = () => {

    const [matches, setMatches] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await API.get(`/match?userid=${sessionStorage.getItem("@USERID")}`, {
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});

                    console.log(response);
                    // setMatches();
    
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
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                <div className={styled.card}><Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" /></div>
                {/*<Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/> */}
            </div>
        </div>
    );
}