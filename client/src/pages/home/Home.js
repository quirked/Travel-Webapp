import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
        <Container>
            <Navbar/>
        </Container>
    )
}

const Container = styled.div`
height: 60px;
`;

export default Home