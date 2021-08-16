import React from 'react'
import { Header } from "../components"
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

const HeaderContainer = ( {children} )=>{
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo}></Header.Logo>
                <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
       
    );
}

export default HeaderContainer      