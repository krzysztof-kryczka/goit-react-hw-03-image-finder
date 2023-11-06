import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={onClick} className={styles.Button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
