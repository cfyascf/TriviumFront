import styled from "./styles.module.sass";

export const History = () => {
    return (
        <div className={styled.history}>
            <div className={styled.searchbar_container}>
                <div className={styled.searchbar}>
                    <span className="material-symbols-outlined">search</span>
                    Search...
                </div>
            </div>
        </div>
    );
}