import React from 'react'
import { Container } from '../Atoms/ContainerElements';
import { Gap } from '../Atoms/Gap';
import { Section } from '../Atoms/Section';
import SectionTitles from '../Atoms/SectionTitle';
import { FaHtml5, FaCss3, FaJavascript, FaReact, FaNpm, FaCheck, FaBootstrap } from '../Atoms/SocialIcon';
import Detail from '../Molecules/Detail';

const Skills = ({title, skillsTitle, skillsWorkflow, firstObj, secondObj, thirdObj}) => {
    return (
        <Container>
            <Section id='skills'>
                <SectionTitles sectionTitle={title}></SectionTitles>
                <Detail company={skillsTitle}/>
                <div className='p-10'>
                    <FaHtml5/>
                    <FaCss3/>
                    <FaJavascript />
                    <FaReact />
                    <FaNpm/>
                    <FaBootstrap/>
                </div>
                <Detail company={skillsWorkflow}/>
                <div className='row'>
                    <FaCheck/>
                    <Detail detail={firstObj.detail}/>
                </div>
                <div className='row'>
                    <FaCheck/>
                    <Detail detail={secondObj.detail}/>
                </div>
                <div className='row'>
                    <FaCheck/>
                    <Detail detail={thirdObj.detail}/>
                </div>
                <Gap/>
            </Section>
        </Container>
    )
}

export default Skills;