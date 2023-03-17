import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

export const ContactList = ({contacts, filter, deleteContact}) => {
    return (
        <ul onClick={deleteContact}>
        {contacts.length > 0 && (contacts
        .filter(value => value.name.toLocaleLowerCase().includes(filter))
        .map(contact => {
         return <Contact key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}/>
        }))}

      </ul>  
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),
    filter: PropTypes.string,
    deleteContact: PropTypes.func.isRequired
}