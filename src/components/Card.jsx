import styled from "styled-components";
import { device } from '../device';

function Card(props) {
    console.log()
    return(
        <div>
            <Image>
            <img src={props.image}/>
            </Image>
            <h2>{props.title}</h2>
            {/*<p>Artist: {props.artist}</p>
            <p>Genre: {props.genre}</p> */}
            <i>{props.role}</i>
        </div>
    );
}

const Image = styled.div`
    height: 60vh;
    overflow: hidden;

    @media ${device.mobileM} {
        width: 100vw;
        img {
            object-fit: contain;
            height: 100%;
        }
      }

      @media ${device.laptop} {
        width: 100vw;
        img {
        height: 100%;
        width: 30vw;
        }
      }
`;

export default Card;