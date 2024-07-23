import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div style={{textAlign: "center"}}>
        <hr />
        <List>
        <NavLink onClick={scrollToTop} style={{color: "white"}} to={'/about'}>
            <h4>ABOUT</h4>
        </NavLink>
        <NavLink onClick={scrollToTop} style={{color: "white"}} to={'/allWorks'}>
            <h4>WORKS</h4>
        </NavLink>
        <NavLink onClick={scrollToTop} style={{color: "white"}} to={'/contact'}>
            <h4>CONTACT</h4>
        </NavLink>
      </List>
        <p>&copy; {new Date().getFullYear()} pjpc </p>
        <i>Website designed by Caitlyn Curran.</i>
    </div>
  )
}

const List = styled.div`
  padding: 1.2rem;
`;

export default Footer