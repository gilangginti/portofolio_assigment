import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavLinkS = styled(LinkS)`
    display: flex;
    color:#d9afa1;
    font-size: 18px;
    letter-spacing: 0.3rem;
    margin-bottom: 12px;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    margin: 10px;

    &.active{
        color: #fff;
    }
    &:hover{
        color:#fff;
    }
`;