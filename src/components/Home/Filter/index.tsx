import { useState } from "react";
import styled from "./styles.module.sass";

interface SearchComponentProps {
    onSearch: (fullname: string ) => void;
}

export const Filter: React.FC<SearchComponentProps> = ({ onSearch }) => {

    const [options, setOptions] = useState(false)
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    }

    return <>
        <div className={styled.content}>
            <div className={styled.filters_container}>
                <input placeholder="Search..."  onChange={handleSearchChange}/>
                <span className="material-symbols-rounded">search</span>
            </div>
            <div>
                <div className={styled.filters_container} onClick={() => setOptions(!options)}>
                    <div className={styled.filters}><p>Filters</p></div>
                    <span className="material-symbols-rounded">filter_alt</span>
                </div>
                <div className={options ? styled.options : styled.hidden}>
                    <p>Owner</p>
                    <p>Player</p>
                </div>
            </div>
        </div>
    </>;
}