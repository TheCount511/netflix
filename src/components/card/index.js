import React from 'react';
import { createContext, useState, useContext } from "react";
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image } from "./styles/card";

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = ({ children, ...restProps }) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}


Card.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}


Card.Meta = ({ children, ...restProps }) => {
    return <Meta {...restProps}>{children}</Meta>
}


Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)
    return showFeature ? (
        <Feature
            {...restProps}
            src={process.env.PUBLIC_URL +  `/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src={process.env.PUBLIC_URL + "/images/icons/close.png"} alt="close" />
                </FeatureClose>
            

            <Group margin="30px 0" flexDirection="row" alignItem="center">
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity<12?'PG':itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Group>
            {children}
            </Content> 
        </Feature>
    ) : null
}
  
Card.Entities = ({ children, ...restProps }) => {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Item = ({ item, children, ...restProps }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return <Item
        onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
        }}
        {...restProps}>{children}</Item>
}

Card.Image = ({ ...restProps }) => {
    return <Image {...restProps} />
}

export default Card;