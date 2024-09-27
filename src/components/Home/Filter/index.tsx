import styled from "./styles.module.sass";

export const Filter = () => {
    return <>
        <div className={styled.content}>
            <div className={styled.filters_container}>
                <input placeholder="Search..." />
                <span className="material-symbols-rounded">search</span>
            </div>
            <div className={styled.filters_container}>
                <div className={styled.filters}><p>Filters</p></div>
                <span className="material-symbols-rounded">filter_alt</span>
            </div>
        </div>
    </>;
}