import React from 'react'
import { Container } from '../Atoms/ContainerElements';
import { Gap } from '../Atoms/Gap';
import { Section } from '../Atoms/Section';
import SectionTitles from '../Atoms/SectionTitle';
import { FaTrophy } from '../Atoms/SocialIcon';
import Detail from '../Molecules/Detail';

const Award = ({title,firstObj, secondObj}) => {
    return (
        <Container>
            <Section  id='award'>
                <SectionTitles sectionTitle={title}></SectionTitles>
                <div className='row'>
                    <FaTrophy/>
                    <Detail detail={firstObj.detail}/>
                </div>
                <div className='row'>
                    <FaTrophy/>
                    <Detail detail={secondObj.detail}/>
                </div>
                <Gap/>
            </Section>
        </Container>
    )
}

export default Award;