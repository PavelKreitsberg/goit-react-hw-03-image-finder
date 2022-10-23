import React from 'react';

import css from '../Modal/Modal.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === `Escape`) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.modal_backdrop}>
        <img
          src={this.props.image}
          className={css.modal_image}
          alt="searching element"
        />
      </div>
    );
  }
}
