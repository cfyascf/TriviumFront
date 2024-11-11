import styled from "./styles.module.sass"
import nodata from "/no_data.png"

export const NoData = () => {
    return (
        <div className={styled.container}>
            <img src={nodata}></img>
        </div>
    )
}