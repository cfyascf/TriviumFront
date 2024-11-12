import { History } from "../../components/Home/History"
import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import { ProfilesSearch } from "../../components/ProfilesSearch"
import styled from "./styles.module.sass"

export const Search = () => {
    return (
        <>
            <Navbar/>
            <Page>
                <ProfilesSearch/>
            </Page>
        </>
    )
}