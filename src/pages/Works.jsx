import Card from "../components/Card";
import works from '../works.js';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { device } from '../device';

function Works() {
  return (
    <div>
      <TopWrapper>
        <h1>Works</h1>
        <p>click a work to view its content.</p>
      </TopWrapper>
    <SplideWrapper>
    <Splide options={{
      perMove: 2,
      pagination: false,
      drag: 'free',
      rewind: false,
      perPage: 3,
      gap: '5rem',
      arrows: false,
      wheel: true,
      waitForTransition: true,
      snap: false,
      breakpoints: {
        1024: {
          perPage: 2,
         
        },
        768: {
          perPage: 1,
      
        },
      },
      }}>
    {works.map((work) => {
      return (
      <SplideSlide key={work.id}>
      <CardWrapper>
        <Link style={{textDecoration: "none", color: "white"}} to={'/works/' + work.id}>
        <Card 
          image={work.image}
          title={work.title}
          artist={work.artist}
          genre={work.genre}
          role={work.role}
        />
        </Link>
      </CardWrapper>
      </SplideSlide>
      );
    })}
    </Splide>
    </SplideWrapper>
    </div>
  )
}

const CardWrapper = styled.div`
    margin: auto;

    @media ${device.mobileM} {
      width: 100%;
      overflow: hidden;
    }

    @media ${device.laptop} {
      width: 100%;
    }
`;

const SplideWrapper = styled.div`
    margin: 7rem 0rem 0rem 0rem;
    margin-top: 10rem;
    height: 90vh;
`;

const TopWrapper = styled.div`
    text-align: center;
    line-height: 1vh;
    font-size: 2rem;
    position: absolute;
    margin-top: 1.5rem;
    top: 0;
    right: 0;
    left: 0;
    height: 15vh;
    width: 100%;

    p {
      font-size: 1.3rem;
    }
`;


export default Works