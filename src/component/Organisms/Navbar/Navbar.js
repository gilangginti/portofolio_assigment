import React from 'react'
import profile from '../../../image/profiles.jpg'
import {Nav} from './NavbarElements'
import {Img} from '../../Atoms/ProfileElements'
import {NavLinkS} from '../../Atoms/NavLinksElements'
import NavbarResponsive from './NavbarResponsive'


const Navbar = () => {
    return (
        <>
        <NavbarResponsive/>
        <Nav>
            <Img src={profile}></Img>
            <NavLinkS to="about"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        >ABOUT</NavLinkS>
            <NavLinkS to="experience"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-80}>EXPERIENCE</NavLinkS>
            <NavLinkS to="education"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-0}>EDUCATION</NavLinkS>
            <NavLinkS to="skills"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-0}>SKILLS</NavLinkS>
            <NavLinkS to="interest"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={-0}>INTEREST</NavLinkS>
            <NavLinkS to="award"
                        activeClass='active'
                        spy={true}
                        duration={500}
                        smooth={true}
                        offset={10}>AWARD</NavLinkS>
        </Nav>
        </>
    )
}
export default Navbar;
