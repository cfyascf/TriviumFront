import { useState } from "react";
import styled from "./styles.module.sass";

const Navbar = () => {
    const [optionsShowing, setOptionsShowing] = useState(false);
    const [configShowing, setConfigShowing] = useState(false);

    return (
        <div className={styled.navbar_container}>
            <div className={styled.navbar}>
                <button className={styled.button}>
                    <span className="material-symbols-outlined">home</span>
                </button>
                <button className={styled.button}>
                    <span className="material-symbols-outlined" onClick={() => setOptionsShowing(!optionsShowing)}>add_circle</span>
                </button>
                <div className={optionsShowing ? styled.options : styled._hidden}>
                    <p className={styled.option}>Create room</p>
                    <p className={styled.option}>Create form</p>
                </div>
            </div>
            <div className={styled.navbar}>
                <button className={styled.button}>
                    <span className="material-symbols-outlined">settings</span>
                    {/* <div className={styled.config}>
                        <p className={styled.option}>Logout</p>
                    </div> */}
                </button>
            </div>
        </div>
    )
}

export default Navbar;