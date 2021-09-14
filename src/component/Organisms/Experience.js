import React from 'react'
import { Container } from '../Atoms/ContainerElements';
import { Gap } from '../Atoms/Gap';
import { Section } from '../Atoms/Section';
import SectionTitles from '../Atoms/SectionTitle';
import Detail from '../Molecules/Detail';

const Experience = ({title, firstObj, secondObj, thirdObj}) => {
    return (
        <Container>
            <Section style={{marginTop:'12em'}} id='experience'>
                <SectionTitles sectionTitle={title}></SectionTitles>
                <Detail title={firstObj.position}
                           tanggal={firstObj.date}
                           company={firstObj.company}
                           detail={firstObj.detail}/>
                <Gap/>
                <Detail title={secondObj.position}
                           tanggal={secondObj.date}
                           company={secondObj.company}
                           detail={secondObj.detail} />
                <Gap/>
                <Detail  title={thirdObj.position}
                           tanggal={thirdObj.date}
                           company={thirdObj.company}
                           detail={thirdObj.detail} />
            </Section>
        </Container>
    )
}

export default Experience;