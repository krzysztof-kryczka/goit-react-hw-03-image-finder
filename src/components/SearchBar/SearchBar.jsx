import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from './SearchBar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeInput = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            &#x1F50D;
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.handleChangeInput}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
