import React from 'react'
import {FaqsContainer} from '../containers/accordion'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';


export default function Home(){
    return(
        <>  
            <HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            </HeaderContainer>
        </>
    );
}