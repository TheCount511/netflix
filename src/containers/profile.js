import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import {Profiles} from '../components'


export const SelectProfileContainer = ({ user, setProfile }) => {
    return <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>
        <Profiles.Title>Who' watching?</Profiles.Title>
        <Profiles.List>
            <Profiles.User>
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles.List>
    </>
}