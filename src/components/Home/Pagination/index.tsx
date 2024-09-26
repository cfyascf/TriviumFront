import styled from "./styles.module.sass";

export const Pagination = () => {
    return (
        <div className={styled.pagination_container}>
            <div className={styled.left}><span className="material-symbols-outlined">chevron_left</span></div>
            <p>3</p>
            <div className={styled.right}><span className="material-symbols-outlined">chevron_right</span></div>
        </div>
    );
}