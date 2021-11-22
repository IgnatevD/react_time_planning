import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Svg from '../Svg/Svg';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

// кинь проп chart если нужна модалка для графика
function Modal({ closeModal, children, chart = false }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  function onCloseBtnClick() {
    closeModal();
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={styles[chart ? 'chartOverlay' : 'mainOverlay']}
    >
      <div className={styles[chart ? 'chartModal' : 'mainModal']}>
        <button
          onClick={onCloseBtnClick}
          type="button"
          aria-label="close-button"
          className={styles.btn}
        >
          <Svg icon="#icon-close" className={styles.icon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
