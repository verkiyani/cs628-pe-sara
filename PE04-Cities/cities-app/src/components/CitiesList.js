import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

const CitiesList = ({ selectedCityId }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/cities')
      .then(response => setCities(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Cities List</h2>
      <ListGroup>
        {cities.map(city => (
          <ListGroup.Item
            key={city._id}
            className={`d-flex justify-content-between align-items-center ${selectedCityId === city._id ? 'fw-bold shadow-lg' : ''}`}
          >
            <Link to={`/cities/${city._id}`} className="text-decoration-none">{city.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CitiesList;
