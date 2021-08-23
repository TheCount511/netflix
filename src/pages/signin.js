import React, { useState, useContext } from 'react'
import {FirebaseContext} from '../context/firebase'
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer'
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

const Signin = () => {
    const history = useHistory()
    const [emailAddress, setEmailAddress] = useState('');
    const {firebase} = useContext(FirebaseContext)
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

   const isInvalid = password === '' || emailAddress === '';
   const handleSignIn =(event)=>{
       event.preventDefault();
 
       firebase
       .auth()
       .signInWithEmailAndPassword(emailAddress, password)
       .then(()=>{
            history.push(ROUTES.BROWSE)
       })
       .catch((error)=>{
            setEmailAddress('');
            setPassword('');
            setError(error.message);
       })
   }

    return (<>
        <HeaderContainer>
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
            <Form.Text>
                New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
        </Form>
        </HeaderContainer>
       
        <FooterContainer />
    </>
    )
}

export default Signin;