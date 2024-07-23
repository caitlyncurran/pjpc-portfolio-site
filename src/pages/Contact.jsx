import styled from "styled-components";
import { device } from "../device";

function Contact() {
  return (
    <div>
        <TopWrapper>
        <h1>Contact</h1>
        </TopWrapper>
        <Wrapper>
        <ul>
        <li>Email: <a style={{color:"white"}} href="mailto:pjpc.nyc@gmail.com">pjpc.nyc@gmail.com</a></li>
        <li>Instagram: <a style={{color:"white"}} href="https://www.instagram.com/pjpc.nyc/">@pjpc.nyc</a></li>
        <li>Soundcloud: <a style={{color:"white"}} href="https://soundcloud.com/pjpcnyc">pjpc.nyc</a></li>
        </ul>
        </Wrapper>
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

    @media ${device.mobileS} {
      line-height: 9vh;
      font-size: 1rem;
      height: 15vh;
    }

    @media ${device.laptop} {
      line-height: 19vh;
      font-size: 2rem;
      height: 30vh;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style-type: none;
  }
  margin: auto;

  @media ${device.mobileS} {
    font-size: 1.5rem;
    line-height: 5rem;
    margin-top: 15rem;
    margin-bottom: 5rem;
  }

  @media ${device.laptop} {
    font-size: 1.5rem;
    line-height: 5rem;
    margin-top: 20rem;
    margin-bottom: 5rem;
  }
`;

export default Contact