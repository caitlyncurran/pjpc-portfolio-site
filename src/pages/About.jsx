import { Link } from "react-router-dom"
import styled from 'styled-components';
import { device } from "../device";

function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <TopWrapper>
        <h1>Patrick John Paul Curran</h1>
      </TopWrapper>
      <ImageWrapper>
        <img src="/assets/pjpc profile pic.png" alt="Patrick John Paul Curran Profile" />
        <div>
          <h2>Working every day to get that sound out of my head and into your ears.</h2>
          <p>I do composition, recording, production, mixing, and mastering work at City Biking Music in Long Island City.</p>
        </div>
      </ImageWrapper>
      <ImageWrapper2>
        <img className="mobile_studio" src="/assets/studio pic.png" alt="PJPC Studio" />
        <div>
          <h3>Need your song mastered?</h3>
          <p>Allow me to lend my ears to your project. Through signal correction, gain adjustment, and careful routing through compressors and equalizers, my mastering process focuses close attention to detail and brings your track up to a competitive loudness. All in the box.</p>
        </div>
        <img className="laptop_studio" src="/assets/studio pic.png" alt="PJPC Studio" />
      </ImageWrapper2>
      <BottomWrapper>
        <p>Unlimited revisions. The job is not done until you are completely satisfied.</p>
        <TouchLink onClick={scrollToTop} to={'/contact'}>Let's get in touch.</TouchLink>
      </BottomWrapper>
    </div>
  )
}

const TopWrapper = styled.div`
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: black;
    width: 100%;

    @media ${device.mobileM} {
      height: 20vh;
      font-size: 1rem;
      line-height: 15vh;
    }

    @media ${device.laptop} {
      height: 30vh;
      font-size: 2rem;
      line-height: 17vh;
    }
`;

const ImageWrapper = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${device.mobileM} {
      flex-direction: column;
      padding: 0rem;
      padding-top: 5rem;
      margin-top: 6rem;
      gap: 1rem;
      img {
        height: 50vh;
      }
      div {
        h2 {
          font-size: 1.5rem;
          line-height: 1.8rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.6rem;
        }
      }
    }

    @media ${device.laptop} {
      flex-direction: row;
      padding: 5rem;
      margin-top: 9.7rem;
      text-align: center;
      gap: 4rem;
      img {
        height: 70vh;
      }
      div {
        h2 {
          font-size: 2rem;
          line-height: 2.2rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6rem;
        }
      }
    }
`;

const ImageWrapper2 = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${device.mobileM} {
      flex-direction: column;
      gap: 2rem;
      .mobile_studio {
        padding-top: 1.5rem;
        display: flex;
        width: 90vw;
      }
      .laptop_studio {
        display: none;
      }
      div {
        h3 {
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.8rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.6rem;
        }
      }
    }

    @media ${device.laptop} {
      flex-direction: row;
      text-align: center;
      gap: 4rem;
      .mobile_studio {
        display: none;
      }
      .laptop_studio {
        display: flex;
        width: 45vw;
      }
      div {
        h3 {
          font-size: 2rem;
          line-height: 2.2rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6rem;
        }
      }
    }

`;

const BottomWrapper = styled.div`

    @media ${device.mobileM} {
      text-align: center;
      margin-top: 3rem;
      margin-bottom: 2.5rem;
      p {
        font-size: 1rem;
        line-height: 1.6rem;
        margin-bottom: 2rem;
      }
    }

    @media ${device.laptop} {
      margin-top: 7rem;
      margin-bottom: 5rem;
      text-align: center;
      p {
        font-size: 1.5rem;
        line-height: 1.6rem;
      }
    }
`;

const TouchLink = styled(Link)`
    color: white;
    font-weight: bold;

    @media ${device.mobileM} {
      font-size: 1.5rem;
    }

    @media ${device.laptop} {
      font-size: 1.5rem;
    }
`;

export default About