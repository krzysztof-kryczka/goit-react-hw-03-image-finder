import React, { Component } from 'react';
import { fetchPhoto } from './pixabay-api';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    search: '',
    currentPage: 0,
    totalHits: 0,
    images: [],
    error: null,
    isLoading: false,
    isModalOpen: false,
    largeImageURL: '',
    webformatURL: '',
  };

  handleSubmit = search => {
    if (search !== this.state.search) {
      this.setState({ images: [], currentPage: 1, search }, () => {
        this.fetchSearch(search);
      });
    }
  };

  fetchSearch = async valueSearch => {
    this.setState({ isLoading: true, error: null });
    try {
      const response = await fetchPhoto(valueSearch, this.state.currentPage);

      if (response.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        this.setState({ currentPage: 0 });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        totalHits: response.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 600);
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery cards={images} />
      </div>
    );
  }
}
