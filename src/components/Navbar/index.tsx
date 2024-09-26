import { useState } from "react";
import styled from "./styles.module.sass";
import brand from "/brand_name.png";
import Modal from "../Modal";
import Form from "../Form";

const Navbar = () => {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showRoomModal, setShowRoomModal] = useState(false);

    const handleCloseForm = () => setShowFormModal(false);
    const handleShowForm = () => setShowFormModal(true);

    const handleCloseRoom = () => setShowRoomModal(false);
    const handleShowRoom = () => setShowRoomModal(true);


    return (
        <div className={styled.navbar_container}>
            <ul className={styled.navbar}>
                <li className={styled.button}><a>Profile</a></li>

                <li className={styled.button}><a onClick={handleShowForm}>Create form</a></li>

                <img className={styled.brand_name} src={brand}></img>

                <li className={styled.button}><a onClick={handleShowRoom}>Create room</a></li>

                <li className={styled.button}><a>Logout</a></li>
            </ul>

            <Modal isOpen={showFormModal} onClose={handleCloseForm} title="Create Form">
                <Form/>
            </Modal>

            <Modal isOpen={showRoomModal} onClose={handleCloseRoom} title="Título do Modal">
                COMO QUE CRIA SALAAAAA???????????
            </Modal>
 
        </div>
    )
}

export default Navbar;