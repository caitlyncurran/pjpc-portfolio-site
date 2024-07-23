import {NavLink, Link} from 'react-router-dom';
import styled from "styled-components";
import { HiChevronDoubleDown } from "react-icons/hi";
import { useState } from 'react';
import { device } from '../device';


function Home() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
        <Pjpc>
            <Space/>
            <Scroll>Scroll <HiChevronDoubleDown /></Scroll>
            <Card>
                <div>
                <h3>DJ Mixes</h3>
                <hr />
                <p>Check out my <a style={{color: "white"}} href="https://soundcloud.com/pjpcnyc">Soundcloud</a></p>
                </div>
                <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1695711807&color=%231c1c24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Card>
            <Link onClick={scrollToTop} style={{textDecoration: "none"}} to={'/allWorks'}>
            <Card>
                <img className='laptop_img' src="/src/assets/mastered works.png" alt="Mastered Works" />
                <div>
                <h3>Mastered Works</h3>
                <hr />
                <p>Mastered works for various clients</p>
                </div>
                <img className='mobile_img' src="/src/assets/mastered works.png" alt="Mastered Works" />
            </Card>
            </Link>
            <Link onClick={scrollToTop} style={{textDecoration: "none"}} to={'/anime'}>
            <Card>
                <div>
                <h3>Produced Projects</h3>
                <hr />
                <p>Co-produced and mixed works</p>
                </div>
                <img src="/src/assets/animemusiclogo.png" alt="Anime Music Logo" />
            </Card>
            </Link>
            <LinkWrapper><WLink onClick={scrollToTop} to={'/allWorks'}>view all works</WLink></LinkWrapper>
        </Pjpc>
  );
}

const Subtitle = styled.h2`
    position: absolute;
    text-shadow: 2px 1px #1D1D1D;

    @media ${device.laptop} {
        left: 2rem;
        margin-top: 2rem;
    }
`

const Scroll = styled.h3`
    position: absolute;
    right: 5rem;
    margin-top: 2rem;

    @media ${device.mobileM} {
        display: none;
    }

    @media ${device.laptop} {
        display: inline;
    }
`

const Pjpc = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    background-image: url('/src/assets/PJPC logo_whitetranslucent.png');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media ${device.mobileM} {
        background-size: 60vh;
        margin-top: 5rem;
    }
    @media ${device.laptop} {
        background-size: 70vh;
        margin-top: 5rem;
    }
`;

const Space = styled.div`
    @media ${device.mobileM} {
        padding: 0rem;
        padding-top: 42rem;
    }
    @media ${device.laptop} {
        padding: 19rem;
    }
`;

const Card = styled.div`
    display: flex;
    color: white;

    @media ${device.mobileM} {
        gap: 0.3rem;
        flex-direction: column;
        text-align: center;
        margin-top: 5rem;
        .mobile_img {
            display: flex;
        }
        iframe, img {
            width: 90%;
            object-fit: contain;
            margin: auto;
        }
        iframe {
            height: 12rem;
        }
        .laptop_img {
            display: none
        }
        div {
            width: 90%;
            margin: auto;
            background-color: #1D1D1D;
        }
    }
    @media ${device.laptop} {
        flex-direction: row;
        margin-top: 10rem;

        .laptop_img {
            display: flex;
        }
        .mobile_img {
            display: none;
        }
        iframe, img {
            object-fit: fill;
            width: 60%;
            height: 55vh;
            transition: transform .75s ease;
    
            &:hover {
                transform: scale(1.025);
            }
        }
        div {
            width: auto;
            background-color: transparent;
        }
    }
`;

const WLink = styled(Link)`
    padding-top: 2rem;
    text-decoration: none;
    font-family: 'Arimo', sans-serif;
    font-size: 1.5rem;
    color: white;
    width: 100%;
    height: 100%;
    &:hover {
        color: black;
    }
`;

const LinkWrapper = styled.div`
    background-color: #1D1D1D;
    margin-top: 5rem;
    border: 1px solid white;
    height: 3rem;
    width: 80vw;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 1s;
    &:hover {
    background-color: white;
    cursor: pointer;
    }
`;

export default Home