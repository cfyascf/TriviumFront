import styled from "./styles.module.sass";

export const Filter = () => {
    return (
        <div className={styled.searchbar_container}>
            <span className="material-symbols-outlined">search</span>
            <input className={styled.searchbar} placeholder="Search..." />
            <button className={styled.filter_button}>Sort</button>
            <button className={styled.filter_button}>New</button>
            <button className={styled.filter_button}>Button</button>
        </div>
    );
}