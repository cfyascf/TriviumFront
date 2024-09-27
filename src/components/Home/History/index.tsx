import { useEffect, useState } from "react";
import styled from "./styles.module.sass";
import { Card } from "../Card";
import { Pagination } from "../Pagination";
import { Filter } from "../Filter";

export const History = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {

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