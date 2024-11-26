import { useEffect, useState } from "react";
import styled from "./styles.module.sass";
import API from "../../service/API";
import { Filter } from "../Home/Filter";
import { NoData } from "../NoData";
import { Card } from "./Card";

interface IUser {
    _id: string
    fullname: string
    email: string
}

export const ProfilesSearch = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await API.get(`/users/all?search=${search}`, {
                    headers: {
                      'Authorization': `Bearer ${sessionStorage.getItem("@TOKEN")}`,
                    }});

                    console.log(search)
                    setUsers(Object.values(response.data.data.users))
    
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [search]);

    return (    
        <div className={styled.history}>
            <div className={styled.header}>
                <p className={styled.title}>Profiles</p>
                <Filter onSearch={setSearch}/>
            </div>
            <div className={styled.matches_container}>
                { 
                
                setUsers.length > 0 ? 
                    
                users.map(user => (
                        <div className={styled.card} key={user._id}>
                            <Card fullname={user.fullname} email={user.email}/>
                        </div>
                    )) : 

                    <NoData/>
                }
            </div>
        </div>
    );
}