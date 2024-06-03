import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePersons } from '../context/PersonContext';

const PersonDetails = () => {
  const { id } = useParams();
  const { persons, editPerson } = usePersons();
  const person = persons.find(p => p.id === id);

  const [formData, setFormData] = React.useState(person);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    editPerson(formData);
    navigate('/');
  };

  return (
    person ? (
      <div>
        <h2>Details von {person.firstname} {person.lastname}</h2>
        <form onSubmit={handleSubmit}>
          <input name="firstname" value={formData.firstname} onChange={handleChange} />
          <input name="lastname" value={formData.lastname} onChange={handleChange} />
          <input name="ssn" value={formData.ssn} onChange={handleChange} />
          <input name="age" type="number" value={formData.age} onChange={handleChange} />
          <button type="submit">Speichern</button>
        </form>
      </div>
    ) : (
      <p>Person nicht gefunden</p>
    )
  );
};

export default PersonDetails;
