import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import NavBarPage from '../pages/navBarPage';
import Collectors from '../pages/collectors';

function App() {
  return (

      <Router>
        <Container>
            <Switch>
                <Route exact path={"/"}>
                    <NavBarPage/>
                </Route>
                <Route exact path={"/collectors"}>
                    <Collectors/>
                </Route>
            </Switch>
        </Container>

      </Router>
  );
}

export default App;
