import styled from "styled-components";
import {FaGithub as Github, 
        FaLinkedinIn as Linked,
        FaTwitter as Twitter,
        FaFacebookF as Facebook,
        FaHtml5 as FaHtml,
        FaCss3 as FaCss,
        FaCheck as FCheck,
        FaTrophy as FTrophy,
        FaBootstrap as Bootstrap} from 'react-icons/fa'
import {SiJavascript,
        SiReact,
        SiNpm} from 'react-icons/si'

export const SocialIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #495057;
    color: #fff;
    border-radius: 100%;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    cursor: pointer;
    &:hover{
        background-color: #bd5d38;
    }

`;

export const FaGithub = styled(Github)`
    width: 50%;
    height: 50%;
`;

export const FaLinkedIn = styled(Linked)`
    width: 50%;
    height: 50%;
`;

export const FaTwitter = styled(Twitter)`
    width: 50%;
    height: 50%;
`;

export const FaFacebook = styled(Facebook)`
    width: 50%;
    height: 50%;
`;
export const FaHtml5 = styled(FaHtml)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

export const FaCss3 = styled(FaCss)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

export const FaJavascript = styled(SiJavascript)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

export const FaReact = styled(SiReact)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

export const FaNpm = styled(SiNpm)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

export const FaCheck = styled(FCheck)`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    margin-top: 9px;
`;

export const FaTrophy = styled(FTrophy)`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5d41b;
    margin-top: 9px;
`;

export const FaBootstrap = styled(Bootstrap)`
    color: gray;
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;