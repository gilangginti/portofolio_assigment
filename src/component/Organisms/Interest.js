import React from 'react'
import { Container } from '../Atoms/ContainerElements';
import { Gap } from '../Atoms/Gap';
import { Section } from '../Atoms/Section';
import SectionTitles from '../Atoms/SectionTitle';
import Detail from '../Molecules/Detail';

const Interest = ({titleLine, titleDetail}) => {
    return (
        <Container>
            <Section  id='interest'>
                <SectionTitles sectionTitle={titleLine}></SectionTitles>
                <Detail detail={titleDetail}/>
                <Gap/>
            </Section>
        </Container>
    )
}

export default Interest;