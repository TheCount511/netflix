import styled from 'styled-components'

export const Container = styled.div`
disply:flex;
flex-direction:column;
border-bottom:8px solid #222;
text-align:center;
padding:45px 165px ;
`;

export const Title = styled.h1`
color:white;
max-width:640px;
font-size:50px;
font-weight:500;
margin:auto;

@media (max-width:600px){
    font-size:35px;
}`
;

export const SubTitle = styled.h2`
color:white;
font-size:26px;
font-weight:normal;
margin:16px auto;

@media (max-width: 600px){
    font-size:18px;
}`;