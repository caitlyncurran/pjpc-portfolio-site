import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { device } from "../device";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    console.log(menuOpen);
  return (
    <div>
    <Logo><NavLink onClick={()=> {setMenuOpen(false); scrollToTop();}} to={'/'} ><img src="/assets/logo_whiteontranslucent.png" alt="pjpc logo" /></NavLink></Logo>
    <Menu onClick={()=> {setMenuOpen(!menuOpen)}}><HiMenu size={50}/></Menu>
    <List className={menuOpen && "open"}>
        <NavLink onClick={()=> {setMenuOpen(false); scrollToTop();}} style={{textDecoration: "none", color: "white"}} to={'/about'}>
            <h4>ABOUT</h4>
        </NavLink>
        <NavLink onClick={()=> {setMenuOpen(false); scrollToTop();}} style={{textDecoration: "none", color: "white"}} to={'/allWorks'}>
            <h4>WORKS</h4>
        </NavLink>
        <NavLink onClick={()=> {setMenuOpen(false); scrollToTop();}} style={{textDecoration: "none", color: "white"}} to={'/contact'}>
            <h4>CONTACT</h4>
        </NavLink>
    </List>
    </div>
  )
}

const Logo = styled.div`
    top: 0;
    left: 0;
    width: 10%;
    z-index: 1;
    position: fixed;
    display: flex;
    margin: 1rem 0 0 1rem;

    img {
        height: 8vh;
    }
    @media ${device.mobileM} {
        img {
            height: 5vh;
            margin-left: 2rem;
        }
    }
    @media ${device.laptop} {
        img {
            height: 8vh;
            margin-left: 0rem;
        }
    }
`;

const List = styled.div`
    position: fixed;
    justify-content: space-around;
    display: flex;
    z-index: 1;
    top: 0;
    right: 0;

    @media ${device.mobileM} {
        display: none;
        flex-direction: column;
        width: 20%;
        text-align: center;
        margin-top: 5rem;
        margin-right: 0.5rem;
        background-color: #1D1D1D;

        &.open {
            display: flex;
        }
    }

    @media ${device.laptop} {
        width: 25%;
        display: flex;
        flex-direction: row;
        width: 25%;
        margin-top: 0rem;
    }
`;


const Menu = styled.div`
    z-index: 1;
    display: none;
    position: fixed;
    top: 0.75rem;
    right: 2rem;
    flex-direction: column;
    justify-content: space-between;
    width: 2.5rem;
    height: 3rem;

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileM} {
        display: flex;
    }

    @media ${device.laptop} {
        display: none;
    }
`;

export default Header