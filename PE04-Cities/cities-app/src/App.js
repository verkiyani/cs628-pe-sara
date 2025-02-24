import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

const CityDetailsPage = () => {
  const { id } = useParams();
  return (
    <Container>
      <CitiesList selectedCityId={id} />
      <CityDetails id={id} />
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Cities Application</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Cities List</Nav.Link>
            <Nav.Link as={Link} to="/add">Add City</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<CitiesList />} />
          <Route path="/add" element={<AddCity />} />
          <Route path="/cities/:id" element={<CityDetailsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
