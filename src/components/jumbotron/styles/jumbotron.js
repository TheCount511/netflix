import styled from 'styled-components/macro';

const Item = styled.div`
display:flex;
border-bottom:8px solid #222;
padding:50px 5%;
color:white;
overflow:hidden;
`;

const Inner = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:${({ direction }) => direction};
max-width:1100px;
margin:auto;
width:100%;

@media (max-width:1000px){
    flex-direction:column
}
`;


const Pane = styled.div`
width:50%
@media(max-width:1000px){
    width:100%;
    padding:0 45px;
    text-align:center;
}`;

const Image = styled.img`
max-width:100%;
height:auto;
`;

const Title = styled.h1`
font-size:50px;
line-height:1.1;
margin-bottom:8px;

@media (max-width:600px)
{
    font-size: 35px;
}`;

const SubTitle = styled.h2`
font-size:26px;
font-weight:normal;
line-height:normal;

@media(max-width:600px){
    font-size:18px;
}
`;

const Container = styled.div`
@media (max-width:1000px){
    ${Item}:last-of-type h2{
        margin-bottom:50px;
    }
}`;

export { Container, Image, Inner, Item, Pane, SubTitle, Title }