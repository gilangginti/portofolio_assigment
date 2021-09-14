import React from 'react'
import { Container } from '../Atoms/ContainerElements';
import { Gap } from '../Atoms/Gap';
import { Section } from '../Atoms/Section';
import SectionTitles from '../Atoms/SectionTitle';
import Detail from '../Molecules/Detail';

const Education = ({title, firstObj, secondObj}) => {
    return (
        <Container>
            <Section  id='education'>
                <SectionTitles sectionTitle={title}></SectionTitles>
                <Detail title={firstObj.school}
                           tanggal={firstObj.date}
                           company={firstObj.major}
                           detail={firstObj.detail}/>
                <Gap/>
                <Detail title={secondObj.school}
                           tanggal={secondObj.date}
                           company={secondObj.major}
                           detail={secondObj.detail} />
                <Gap/>
            </Section>
        </Container>
    )
}

export default Education;