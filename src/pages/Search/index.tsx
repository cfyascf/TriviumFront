import Navbar from "../../components/Navbar"
import { Page } from "../../components/Page"
import { ProfilesSearch } from "../../components/ProfilesSearch"

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