import React, { createContext, useState, useContext } from 'react';

const PersonContext = createContext();

const initialPersons = [
  { id: '1', firstname: 'John', lastname: 'Doe', ssn: '123-45-6789', age: 30 },
  { id: '2', firstname: 'Jane', lastname: 'Doe', ssn: '987-65-4321', age: 25 },
  { id: '3', firstname: 'Max', lastname: 'Mustermann', ssn: '111-22-3333', age: 40 },
];

const PersonProvider = ({ children }) => {
  const [persons, setPersons] = useState(initialPersons);
  
  const addPerson = (person) => setPersons([...persons, person]);
  const deletePerson = (id) => setPersons(persons.filter(p => p.id !== id));
  const editPerson = (updatedPerson) => setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p));

  const getAverageAge = () => persons.length ? persons.reduce((sum, p) => sum + p.age, 0) / persons.length : 0;
  const getOldestPerson = () => persons.sort((a, b) => b.age - a.age || a.lastname.localeCompare(b.lastname))[0];

  return (
    <PersonContext.Provider value={{ persons, addPerson, deletePerson, editPerson, getAverageAge, getOldestPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

const usePersons = () => useContext(PersonContext);

export { PersonProvider, usePersons };
