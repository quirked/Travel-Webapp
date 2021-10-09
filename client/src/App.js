import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Home/>
      <Container>
        <Sidebar/>
        <Others>other stuff</Others>
      </Container>
    </div>
  );
}

const Container = styled.div`
display: flex;
`;

const Others = styled.div`
flex: 4;
background-color: pink;
`;

export default App;
