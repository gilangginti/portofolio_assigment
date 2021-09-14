import React from 'react'
import styled from 'styled-components';
import { NavLinkS } from '../../Atoms/NavLinksElements';

const NavbarResponsive = () => {
    return (
        <Navscreen>
            <NavLinkS to="about"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-60}
                        >ABOUT</NavLinkS>
            <NavLinkS to="experience"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-230}>EXPERIENCE</NavLinkS>
            <NavLinkS to="education"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-100}>EDUCATION</NavLinkS>
            <NavLinkS to="skills"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-100}>SKILLS</NavLinkS>
            <NavLinkS to="interest"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-30}>INTEREST</NavLinkS>
            <NavLinkS to="award"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={0}>AWARD</NavLinkS>
        </Navscreen>
    )
}

export default NavbarResponsive;

const Navscreen = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: fixed;
        color: #fff;
        /* display: inline; */
        background-color: #bd5d38;
        height: 80px;
        width: 100%;
      
        top:0;
    }
`;