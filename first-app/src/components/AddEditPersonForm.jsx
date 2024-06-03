import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersons } from '../context/PersonContext';

const AddEditPersonForm = ({ person }) => {
  const [formData, setFormData] = useState(person || { firstname: '', lastname: '', ssn: '', age: 0 });
  const { addPerson, editPerson } = usePersons();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person) {
      editPerson(formData);
    } else {
      addPerson({ ...formData, id: Date.now().toString() });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstname" value={formData.firstname} onChange={handleChange} />
      <input name="lastname" value={formData.lastname} onChange={handleChange} />
      <input name="ssn" value={formData.ssn} onChange={handleChange} />
      <input name="age" type="number" value={formData.age} onChange={handleChange} />
      <button type="submit">{person ? 'Bearbeiten' : 'Hinzufügen'}</button>
    </form>
  );
};

export default AddEditPersonForm;
