import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import works from "../works.js";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { device } from "../device.js";

function Content() {
    let params = useParams();
    const [content, setContent] = useState([]);

    const fetchDetails = () => {
        const data = works.filter((work) => work.id == params.name);
        setContent(data);
    }

    useEffect(()=> {
        fetchDetails();
      }, [params.name]);

      console.log(content);

  return (
    <div>
        <LinkWrapper>
            <Link style={{color:"white", textDecoration:"none"}} to={'/allWorks'}><HiChevronDoubleLeft />  back to all works</Link>
        </LinkWrapper>
        {content[0] ? (
        <Wrapper>
            <h1>Title: {content[0].title}</h1>
            <h2>Artist: {content[0].artist}</h2>
            <p>Genre: {content[0].genre}</p>
            <i>{content[0].role}</i> 
            <FrameWrapper>
            <code dangerouslySetInnerHTML={{__html: content[0].iframe}}></code>
            </FrameWrapper>
        </Wrapper> 
        ) : (
            <h1>Content</h1>
        )}
    </div>
  )
}

const Wrapper = styled.div`
    padding: 5rem;
    width: 70vw;
    margin: auto;
    text-align: center;

    @media ${device.mobileM} {
        h1 {
            line-height: 2rem;
        }
    }
`;

const FrameWrapper = styled.div`
    margin-top: 2rem;
`;

const LinkWrapper = styled.div`
    position: relative;
    @media ${device.mobileM} {
        top: 4rem;
        left: 3rem;
    }

    @media ${device.laptop} {
        top: 10rem;
        left: 10rem;
    }
`;

export default Content