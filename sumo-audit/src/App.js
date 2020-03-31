import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import NavBarPage from './pages/NavBarPage';
import CollectorPage from './pages/CollectorPage';

function App() {
  return (

      <Router>
        <Container>
            <Switch>
                <Route exact path={"/"}>
                    <NavBarPage/>
                </Route>
                <Route exact path={"/collectors"}>
                    <CollectorPage/>
                </Route>
            </Switch>
        </Container>

      </Router>
  );
}

export default App;
