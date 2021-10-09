import React from 'react'
import styled from 'styled-components'
import Friend from '../../components/friend/Friend'
import {users} from "../../data"

const Friends = () => {
    return (
        <Container>
            {users.map((user) => (
                <Friend user={user} key={user.id}/>
            ))}
        </Container>
    )
}

const Container = styled.div`
flex: 4;
background-color: pink;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export default Friends
