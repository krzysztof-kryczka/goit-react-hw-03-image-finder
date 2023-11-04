import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, onShow, tags } = this.props;

    return (
      <li className={styles.galleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          onClick={() => onShow(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  onShow: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
