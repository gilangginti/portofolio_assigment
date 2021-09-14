import React from 'react'
import {FaTwitter, SocialIcon, FaGithub, FaLinkedIn, FaFacebook} from '../../component/Atoms/SocialIcon'
import { SubHeading } from '../../component/Atoms/SubHeading';
import { Subtitle } from '../../component/Atoms/Subtitle';
import { Section } from '../../component/Atoms/Section';
import {Container} from '../../component/Atoms/ContainerElements'
import {SectionTitle} from '../../component/Atoms/SectionTitle'


const About = ({firstName, lastName, address, email, titleDetail}) => {
    return (
        <Container>
            <Section id='about'>
                <SectionTitle style={{marginBottom: '12px'}}>{firstName} <span className="primary">{lastName}</span></SectionTitle>
                <SubHeading style={{marginBottom: '40px'}}>{address}<span className="primary">{email}</span></SubHeading>
                <Subtitle>
                    {titleDetail}
                </Subtitle>
                <div style={{marginTop:'50px'}}>
                <SocialIcon>
                        <FaGithub />
                </SocialIcon>
                <SocialIcon>
                        <FaLinkedIn />
                </SocialIcon>
                <SocialIcon>
                        <FaTwitter />
                </SocialIcon>
                <SocialIcon>
                        <FaFacebook/>
                </SocialIcon>
                </div>
            </Section>
        </Container>
    )
}
export default About; 
