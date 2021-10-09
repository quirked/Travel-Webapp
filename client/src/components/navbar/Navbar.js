import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <NavLeft>
          <Logo>Travel Site</Logo>
        </NavLeft>
        <NavRight>
          <Avatar>
            <img src="https://avatars.dicebear.com/api/micah/nishankfe.svg" alt=""/>
          </Avatar>
        </NavRight>
      </NavbarWrapper>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 50px;
background-color: #fff;
position: sticky;
top: 0;
z-index: 999;
background-color: cyan;
`;

const NavbarWrapper = styled.div`
height: 100%;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const NavLeft = styled.div`
`;

const Logo = styled.div`
font-weight: bold;
font-size: 30px;
color: #000;
cursor: pointer;
`;

const NavRight = styled.div`
position: relative;
`;

const Avatar  = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
cursor: pointer;
`;


export default Navbar
