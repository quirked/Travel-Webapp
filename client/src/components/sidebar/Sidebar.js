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
        </Container>
    )
}

const Container = styled.div`
flex: 1;
height: calc(100vh - 50px);
background-color: yellow;
position: sticky;
top: 50px;
`;

const SideMenu = styled.div`
padding: 20px;
color: black;
`;

const SidebarTitle = styled.div`
font-size: 17px;
font-weight: bold;
padding: 10px;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;
margin-bottom: 10px;
&:hover {
    background-color: #fff;
}
`;

export default Sidebar
