import React from 'react'
import styled from 'styled-components'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import ExploreIcon from '@material-ui/icons/Explore'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import PersonIcon from '@material-ui/icons/Person'

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <SideMenu>
                    <SidebarTitle>
                        <HomeRoundedIcon/>
                        Home
                    </SidebarTitle>
                    <SidebarTitle>
                        <ExploreIcon/>
                        Explore
                    </SidebarTitle>
                    <SidebarTitle>
                        <NotificationsIcon/>
                        Notifications
                    </SidebarTitle>
                    <SidebarTitle>
                        <ChatIcon/>
                        Messages
                    </SidebarTitle>
                    <SidebarTitle>
                        <BookmarksIcon/>
                        Bookmarks
                    </SidebarTitle>
                    <SidebarTitle>
                        <PeopleAltIcon/>
                        Friends
                    </SidebarTitle>
                    <SidebarTitle>
                        <PersonIcon/>
                        Profile
                    </SidebarTitle>
                </SideMenu>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
flex: 1;
height: calc(100vh-60px);
background-color: #ffcccb;
position: sticky;
top: 60px;
`;

const Wrapper = styled.div`
padding: 20px;
color: #000;
`;

const SideMenu = styled.div`
margin-bottom: 10px;
`;

const SidebarTitle = styled.div`
border: 1px solid black;
font-size: 13px;
padding: 5px;
cursor: pointer;
display: flex:
justify-content: center;
align-items: center;
border-radius: 10px;
&:hover {
    baclground-color: #000;
}
`;

export default Sidebar
