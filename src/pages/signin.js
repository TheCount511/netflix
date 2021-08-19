import React, { useState } from 'react'
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer'
import { Form } from '../components';

const Signin = () => {

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

   const isInvalid = password === '' || emailAddress === '';
   const handleSignIn =(event)=>{
       event.preventDefault();
   }

    return (<>
        <HeaderContainer>
        </HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit ={handleSignIn} method = "POST">
              <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({target})=> setEmailAddress(target.value)}/>

            <Form.Input
              type = "password"
              placeholder="Password"
              autoComplete ="off"
              value={password}
              onChange={({target})=> setPassword(target.value)}/>    

              <Form.Submit disabled ={isInvalid} type="submit">
                  Signin
              </Form.Submit>
            </Form.Base>
        </Form>
        <FooterContainer />
    </>
    )
}

export default Signin;