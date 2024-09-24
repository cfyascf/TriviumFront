import { useState } from "react";
import styled from "./styles.module.sass";
import brand from "/brand_name.png";

const Navbar = () => {
    const [optionsShowing, setOptionsShowing] = useState(false);
    const [configShowing, setConfigShowing] = useState(false);

    return (
        <div className={styled.navbar_container}>
            <ul className={styled.navbar}>
                <li className={styled.button}><a>Profile</a></li>
                <li className={styled.button}><a>Create form</a></li>
                <img className={styled.brand_name} src={brand}></img>
                <li className={styled.button}><a>Create room</a></li>
                <li className={styled.button}><a>Logout</a></li>
            </ul>
        </div>
    )
}

export default Navbar;