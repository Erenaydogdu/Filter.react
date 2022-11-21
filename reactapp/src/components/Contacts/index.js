import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

function Contacts() {
  const [contacts ,setContacts]= useState([
    {
      fullname:"Mehmet",
      phone_number:"00123123"
    },
    {
      fullname:"Ayşe",
      phone_number:"21223123"
    }, 
    {
      fullname:"Ali",
      phone_number:"44123678"
    }
  ]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts]);
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div> 
  )
}

export default Contacts
