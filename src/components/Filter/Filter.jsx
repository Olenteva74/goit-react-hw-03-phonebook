import PropTypes from 'prop-types';
import css from "./Filter.module.css"
export const Filter = ({id, filter, addFilter}) => {
    return (
        <div>
          <label htmlFor={id}>Find contacts by name</label>
          <input className={css.input}
          id={id}
          type="text"
          name="filter"
          value={filter}
          onInput={addFilter}
        />
        </div>
    )
}

Filter.propTypes = {
    id: PropTypes.string.isRequired,
    filter: PropTypes.string,
    addFilter: PropTypes.func  
}