import { Link } from "react-router-dom";
import styled from "./styles.module.sass";
import brand from "/brand_name_w&y.png";

const Navbar = () => {
    return (
        <div className={styled.navbar_container}>
            <ul className={styled.navbar}>
                <div className={styled.content}>
                    <img className={styled.brand_name} src={brand}></img>
                    <div className={styled.button_container}>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">person</span>
                            <li><Link to="/home" className={styled.link}>Profile</Link></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">article</span>
                            <li><Link to="" className={styled.link}>Create form</Link></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">group</span>
                            <li><Link to="" className={styled.link}>Create room</Link></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">search</span>
                            <li><Link to="" className={styled.link}>Search</Link></li>
                        </div>
                    </div>
                    <div className={styled.menu_media}><span className="material-symbols-rounded">menu</span></div>
                </div>
                <div className={styled.logout}>
                    <div className={styled.button}>
                        <span className="material-symbols-rounded">logout</span>
                        <li><a>Logout</a></li>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;