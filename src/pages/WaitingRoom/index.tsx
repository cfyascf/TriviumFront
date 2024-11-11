import { useParams } from "react-router-dom";
import styled from "./styles.module.sass";
import pp from "/profile_picture.png";
import API from "../../service/API";
import { useEffect, useState } from "react";

interface IMatch {
    _id: string
    admId: string
    formId: string
    name: string
    pin: string
}

interface IUser {
    email: string
    fullname: string
    _id: string
}

export const WaitingRoom = () => {
    const { id } = useParams();
    const [users, setUsers] = useState<IUser[]>();
    const [match, setMatch] = useState<IMatch>();

    useEffect(() => {
        const fetchMatch = async () => {
            try {
                const response = await API.get(`/match?id=${id}`,{
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});
                    setUsers(Object.values(response.data.data.users));
                    setMatch(response.data.data.match);

            } catch (error) {
                console.log(error)
            }
        }
        fetchMatch();
    }, [])

    return (
        <div className={styled.page}>
            <div className={styled.content_container}>
                <div className={styled.header}>
                    <h2>Room code</h2>
                    <h1>{match?.pin}</h1>
                </div>
                <div className={styled.players}>
                    <h2>Players</h2>

                    {users?.map(user => (
                        <div key={user._id} className={styled.card_container}>
                            <div className={styled.card}>
                                <img className={styled.pp} src={pp}></img>
                                <h2>{user.fullname}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}