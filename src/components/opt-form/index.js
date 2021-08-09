import {Container, Input, Button, Text, Break} from './styles/opt-form'


const Optform = ({children, ...restProps})=>{
 return  <Container {...restProps}>{children}</Container>

}
Optform.Input =({...restProps})=>{
return <Input {...restProps} />

}

Optform.Button = ({children, ...restProps})=>{
    return(
        <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt ="Try Now"/>   
        </Button>
    )
}

Optform.Text = ({children, ...restProps})=>{
    return <Text {...restProps}>{children}</Text>;
}

Optform.Break =({...restProps})=>{
    return <Break {...restProps}/>
}

export default Optform;