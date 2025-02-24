import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const AddCity = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/cities', { name, country, population });
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Add City</h2>
      <Form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" value={country} onChange={e => setCountry(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Population</Form.Label>
          <Form.Control type="text" value={population} onChange={e => setPopulation(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Add City</Button>
      </Form>
    </Container>
  );
};

export default AddCity;
