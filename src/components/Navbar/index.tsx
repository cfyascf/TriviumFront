import { Link, useLocation } from "react-router-dom";
import styled from "./styles.module.sass";
import brand from "/brand_name_w&y.png";

const Navbar = () => {
    const location = useLocation()
    console.log(location)

    return (
        <div className={styled.navbar_container}>
            <ul className={styled.navbar}>
                <div className={styled.content}>
                    <img className={styled.brand_name} src={brand}></img>
                    <div className={styled.button_container}>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <div className={location.pathname == "/home" ? styled.selected : styled.button}>
                                <span className="material-symbols-rounded">person</span>
                                <li className={styled.link}>Profile</li>
                            </div>
                        </Link>
                        <Link to="/enter-room" style={{ textDecoration: 'none' }}>
                            <div className={location.pathname == "/enter-room" ? styled.selected : styled.button}>
                                <span className="material-symbols-rounded">
                                    sports_esports
                                </span>
                                <li className={styled.link}>Join room</li>
                            </div>
                        </Link>
                        <Link to="/create-room" style={{ textDecoration: 'none' }}>
                            <div className={location.pathname == "/create-room" ? styled.selected : styled.button}>
                                <span className="material-symbols-rounded">group</span>
                                <li className={styled.link}>Create room</li>
                            </div>
                        </Link>
                        <Link to="/create-form" style={{ textDecoration: 'none' }}>
                            <div className={location.pathname == "/create-form" ? styled.selected : styled.button}>
                                <span className="material-symbols-rounded">article</span>
                                <li className={styled.link}>Create form</li>
                            </div>
                        </Link>
                        <Link to="" style={{ textDecoration: 'none' }}>
                            <div className={styled.button}>
                                <span className="material-symbols-rounded">search</span>
                                <li className={styled.link}>Search</li>
                            </div>
                        </Link>
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