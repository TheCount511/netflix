
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = ({ to, ...restprops }) => {
    return (
    <ReactRouterLink to={to}>
        <Logo {...restprops} />
    </ReactRouterLink>)
}

export default Header