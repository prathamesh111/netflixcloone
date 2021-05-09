import React from 'react'
import {Inner, Container, Pane,Title, Subtitle , Img , Item} from './styles/jumbotron'


export default function Jumbotron({children, direction= "row", ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner  direction ={direction}>
                {children}
            </Inner>
        </Item>
    );
}

Jumbotron.Container= function JumbotronContainer({children, ...restProps}) {
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Jumbotron.Pane= function JumbotronPane({children, ...restProps}) {
    return(
        <Pane {...restProps}>{children}</Pane>
    )
}

Jumbotron.Title= function JumbotronPane({children, ...restProps}) {
    return(
        <Title {...restProps}>{children}</Title>
    )
}

Jumbotron.Subtitle= function JumbotronPane({children, ...restProps}) {
    return(
        <Subtitle {...restProps}>{children}</Subtitle>
    )
}

Jumbotron.Img= function JumbotronPane({children, ...restProps}) {
    return(
        <Img {...restProps} />
    )
}