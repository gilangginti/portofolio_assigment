import styled from "styled-components";

export const Section = styled.div`
    height: 30rem;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
    max-width: 75rem;
    @media screen and (max-width: 768px){
        padding-top: 10px;
        padding-bottom: 10rrem;
    }
`;