import { useEffect, useState } from "react";
import { ProfileCard } from "../Card";
import styled from "./styles.module.sass";

export const History = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <div className={styled.history}>
            <div className={styled.searchbar_container}>
                <span className="material-symbols-outlined">search</span>
                <input className={styled.searchbar} placeholder="Search..."/>
                <button className={styled.filter_button}>Sort</button>
                <button className={styled.filter_button}>New</button>
                <button className={styled.filter_button}>Button</button>
            </div>
            <div className={styled.matches_container}>
                <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                {/* <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/>
                <ProfileCard title="Challengers" description="Using form named NeuralScience" score="2/10" time="08:34" icon="star"/> */}
            </div>
        </div>
    );
}