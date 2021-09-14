import styled from "styled-components";

export const Nav = styled.div`
    background: #bd5d38;
    height: 100%;
    width: 20%;
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px){
        display: none;
    }
`;