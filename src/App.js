
import './App.css';
import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import routes from './routes'



function App() {
  return (

    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">SIMDT Annaibah</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" activeClassName="active" exact>Home</NavLink>
              <NavLink to="/siswa" activeClassName="active" exact>Daftar Siswa</NavLink>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            {routes.map((route, i) => {
              const {
                path,
                Component
              } = route
              return <Route key={i} path={path}>
                <Component />
              </Route>
            })}
          </Switch>
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
