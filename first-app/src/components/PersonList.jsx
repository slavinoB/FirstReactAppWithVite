import React from 'react';
import { Link } from 'react-router-dom';
import { usePersons } from '../context/PersonContext';

const PersonList = () => {
  const { persons, deletePerson } = usePersons();

  return (
    <div>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            <Link to={`/details/${person.id}`}>{person.firstname} {person.lastname}</Link>
            <button onClick={() => deletePerson(person.id)}>Löschen</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Person hinzufügen</Link>
    </div>
  );
};

export default PersonList;
