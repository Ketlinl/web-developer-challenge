import styled from "styled-components";
// import Logo from "../static/img/logo.png";

const HeaderComponent = () => {
    return (
        <Nav className="navbar navbar-expand-sm bg-dark justify-content-center">
            <a className="navbar-brand" href="#">
            <img src={""} className="rounded-pill" /> 
            </a>
        </Nav>
    );
}

const Nav = styled.nav`
    height: 93px;
`;

export default HeaderComponent;
