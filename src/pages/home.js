import React from 'react'
import {FaqsContainer} from '../containers/accordion'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import { Feature, OptForm } from '../components';


export default function Home(){
    return(
        <>  
            <HeaderContainer>
                <Feature>
                    <Feature.Title>unlimitd streadimgasd as das n </Feature.Title>
                    <Feature.SubTitle>watch anytime anywhere</Feature.SubTitle>
                </Feature>
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}