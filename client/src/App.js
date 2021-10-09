import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import styled from 'styled-components'
import Navbar from "./components/navbar/Navbar";
import Friends from "./pages/friends/Friends";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Sidebar/>
        <Switch>
          <Route exact path='/'></Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
display: flex;
`;

export default App;
