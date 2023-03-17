import React, {Component} from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


const STORAGE_KEY = "contacts";
export class App  extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }

  nameInputId = nanoid();
  telInputId = nanoid();
  filterInputId = nanoid();

  componentDidMount() {
    const contacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
  }

  componentDidUpdate(preProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }

  }

  handleInput = (event) => {
    this.setState ({filter: event.target.value.toLowerCase()})
  }

  handleClick = (event) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(value => value.id !== event.target.dataset.id)
    }))
  }

  addContact = ({name, number}) => {
    if (this.state.contacts.some(value => value.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState =>({
      contacts: [...prevState.contacts, {
        id: nanoid(),
        name: name,
        number: number
     }]
      }));
  }

  render() {
    const {contacts, filter} = this.state;
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          marginLeft: 20
        }}
      >
        {/* React homework template */}
        <div>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.addContact}
        nameInputId={this.nameInputId}
        telInputId={this.telInputId}
        />

          <h2>Contacts</h2>
          <Filter 
          id={this.filterInputId}
          filter={filter}
          addFilter={this.handleInput}
          />
          <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.handleClick}
          />
        </div>

      </div>
    );
  }
};
