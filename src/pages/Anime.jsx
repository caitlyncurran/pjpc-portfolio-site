import styled from "styled-components"
import { device } from '../device'

function Anime() {
  return (
    <Wrapper>
        <img src="./src/assets/animemusiclogo.png" alt="Anime Music Logo" />
        <div>
        <p><a href="https://animemusic.nyc/">Anime Music</a> brings back that feeling you had during the early days of YouTube - when you were watching Naruto AMVs set to the sounds of bands like Linkin Park and My Chemical Romance.</p>
        <p>Using modern production techniques, Anime Music combines genres like pop punk, emo, and indie to revitalize that inescapable mid-2000s alt-rock sound. The music features driving guitar riffs, explosive vocals, and propulsive drumming that will transport you back to the days of laying in bed late at night glued to the screen of your first generation iPod touch.</p>
        <p>With influences ranging from Jimmy Eat World and Paramore to contemporaries like Turnstile and PUP, Anime Music issues a fresh and exciting take on a beloved era of music and culture.</p>
        <p>Check us out on <a href="https://www.tiktok.com/@animemusicnyc">TikTok</a> and <a href="https://www.instagram.com/animemusicnyc/">Instagram</a>.</p>
        <p>Listen to our music on <a href="https://open.spotify.com/artist/2HOW8Ep2wggM6g3p1zNqoB?si=-gvNlKKiR1aGAbOBZ5sXGw&nd=1&dlsi=9b5267a5a8484c84">Spotify</a> or <a href="https://music.apple.com/us/artist/anime-music/1676055433">Apple Music</a>.</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    line-height: 1.5rem;
    font-size: 1.1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2.5rem;
    a {
      color: white;
    }

    @media ${device.mobileM} {
      width: 100%;
      margin-top: 4rem;

      div {
        padding-left: 1rem;
      }

      img {
        width: 85%;
        margin: 1rem 1rem;
        height: 30vh;
        padding: 0rem;
      }
    }

    @media ${device.laptop} {
      width: 50vw;
      text-align: left;
      margin-top: .9rem;

      img {
        border: 7px black solid;
        width: 50%;
        margin: 2rem 0rem;
      }
    }
    
`;

export default Anime