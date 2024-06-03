import React from 'react';
import { usePersons } from '../context/PersonContext';

const Header = () => {
  const { getAverageAge, getOldestPerson } = usePersons();
  
  const averageAge = getAverageAge();
  const oldestPerson = getOldestPerson();

  return (
    <header>
      <h1>Personenverwaltung</h1>
      <div>
        <p>Durchschnittsalter: {averageAge.toFixed(1)}</p>
        <p>Älteste Person: {oldestPerson ? `${oldestPerson.firstname} ${oldestPerson.lastname}` : 'N/A'}</p>
      </div>
    </header>
  );
};

export default Header;
