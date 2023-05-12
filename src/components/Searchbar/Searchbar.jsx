


import PropTypes from 'prop-types';
import s from './Searchbar.module.css';


function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={onHandleSubmit}>
                <button type="submit" className={s.Button}>
                    <span className={s.label} ></span>
                  
                </button>

                <input
                    className={s.input}
                    type="text"
                    value={value}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onSearchQueryChange}
                />
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
    onSearchQueryChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Searchbar;