import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import React, { useState } from 'react';
import { nanoid } from "nanoid";



export const App = () => {
  let getLocalStorageData
  try {
    getLocalStorageData = JSON.parse(localStorage.getItem('localContacts'))
    getLocalStorageData=getLocalStorageData.contacts
    console.log(getLocalStorageData)
  }
  catch {
    getLocalStorageData = null
  }
  const state = {
    contacts:getLocalStorageData,
    filter: '',
    name: '',
    number: '',
  };
  const [userData, setUserData] = useState(state);
  const [inputValue, setInputValue] = useState();

  console.log(userData)
  

  const onChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const onDelete = event => {
    const dataNotToDelete = userData.contacts.filter(contact =>
            !contact.id.toLowerCase().includes(event.target.id.toLowerCase())
    )
    setUserData({
      contacts: dataNotToDelete,
      filter: '',
      name: '',
      number: '',
    });
  }


  const onSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = userData;
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setUserData({
      ...userData,
      contacts: [...contacts, { id: nanoid(),name, number }],
      filter: '',
      name: '',
      number: '',
    });

    console.log(userData)
    try {
    localStorage.setItem('userData', JSON.stringify(userData.contacts));
    console.log('Dane zostały zapisane do local storage.');
  } catch (error) {
  // Obsługa błędu
    console.error('Błąd podczas zapisywania danych do local storage:', error);
  }
    
  }; 

  return (
    <div>
      <h1>Phonebook</h1>
      <TextInput onChange={onChange} onSubmit={onSubmit} value={inputValue}/>
      <h2>Contacts</h2>
      <Filter onChange={onChange}/>
      <Contacts userData={userData} onDelete={onDelete} />
    </div>
  );
  };
  
