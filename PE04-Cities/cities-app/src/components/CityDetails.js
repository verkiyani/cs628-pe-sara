import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const CityDetails = ({ id }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/cities/${id}`)
      .then(response => setCity(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!city) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-lg">
        <h2>{city.name} Details</h2>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population}</p>
      </Card>
    </Container>
  );
};

export default CityDetails;
