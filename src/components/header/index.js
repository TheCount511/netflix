
import React, { useState } from "react";
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, Profile, Text, Search, SearchIcon, SearchInput, PlayButton } from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = ({ children, ...restProps }) => {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = ({ children, ...restProps }) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = ({ children, ...restProps }) => {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = ({ src, ...restProps }) => {
    return <Picture {...restProps} src={process.env.PUBLIC_URL +  `/images/users/${src}.png`} />
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src={process.env.PUBLIC_URL + "/images/icons/search.png"} alt="search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    );

}


Header.Dropdown = ({ children, ...restProps }) => {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>;
};


Header.TextLink = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton= ({ children, ...restProps }) => {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>;
};

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