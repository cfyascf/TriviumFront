import styled from "./styles.module.sass";

const Navbar = () => {
    return (
        <div className={styled.navbar_container}>
            <div className={styled.navbar}>
                <button className={styled.button}>
                    <span className="material-symbols-rounded">home</span>
                </button>
                <button className={styled.button}>
                    <span className="material-symbols-rounded">add_circle</span>
                </button>
            </div>
            <div className={styled.navbar}>
                <button className={styled.button}>
                    <span className="material-symbols-rounded">settings</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;