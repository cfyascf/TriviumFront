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
                            <li><a>Profile</a></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">article</span>
                            <li><a>Create form</a></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">group</span>
                            <li><a>Create room</a></li>
                        </div>
                        <div className={styled.button}>
                            <span className="material-symbols-rounded">search</span>
                            <li><a>Search</a></li>
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