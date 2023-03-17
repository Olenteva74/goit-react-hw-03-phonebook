import PropTypes from 'prop-types';
import css from "./Contact.module.css"

export const Contact = ({id, name, number}) => {
    return (
        <li>
        {name}: {number}
        <button className={css.button} type="button" data-id={id}>Delete</button>
      </li>  
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}