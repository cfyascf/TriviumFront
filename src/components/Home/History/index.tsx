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
                <p>History</p>
                <Filter/>
            </div>
            <div className={styled.matches_container}>
                <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" />
                <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" />
                <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" />
                <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star" />
                {/* <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                <Card title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/> */}
            </div>
            <Pagination/>
        </div>
    );
}