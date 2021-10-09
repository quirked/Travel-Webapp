import { Badge } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNone'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SettingsIcon from '@material-ui/icons/Settings'
import React from "react";
import styled from "styled-components";
import {mobile} from '../../responsive'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>OUR APP</Logo>
        </Left>
        <Center>
          <Links>REACT.</Links>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ChatOutlinedIcon />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge>
              <SettingsIcon />
            </Badge>
          </MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  background-color: white;
  color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Links = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default Navbar