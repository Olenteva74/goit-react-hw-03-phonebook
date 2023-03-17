import React, {Component} from "react";
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css"

export class ContactForm extends Component  {
    state = {
        name:'',
        number: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
      }

    
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit({...this.state});
        this.reset();
      };
    
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }  

    render() {
        const {nameInputId, telInputId} = this.props;
        const {name, number} = this.state;
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label htmlFor={nameInputId}>Name</label>
                <input className={css.input}
                id={nameInputId}
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor={telInputId}>Number</label>
              <input className={css.input}
                id={telInputId}
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <button className={css.button} type="submit">Add contact</button>
              </form>
          )
    }

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
    nameInputId: PropTypes.string.isRequired,
    telInputId: PropTypes.string.isRequired
}