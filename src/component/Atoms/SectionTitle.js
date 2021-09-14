import styled from "styled-components";
import React from 'react'

const SectionTitles = (props) => {
    return (
        <SectionTitle2>{props.sectionTitle}</SectionTitle2>
    )
}
export default SectionTitles;

export const SectionTitle = styled.h1`
    color: #343a40;
    line-height: 1;
    text-transform: uppercase;
    font-size: calc(1.2rem + 5.7vw);
`;

export const SectionTitle2 = styled.h2`
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: #343a40;
    font-size: calc(1.475rem + 2.7vw);
`;

export const SectionTitle3 = styled.h3`
    font-size: calc(1.325rem + 0.9vw);
    color: #343a40;
    text-transform: uppercase;
`;

export const SectionTitle4 = styled.h4`
    color:#bd5d38;
    font-size: 22px;
    font-weight: 400;
`;