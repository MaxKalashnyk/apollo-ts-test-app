import React from 'react';
import Modal from 'react-modal';
import { IProps } from './types';
import { defaultModalStyles } from './styles';

// Modal.setAppElement('#yourAppElement');

export const ModalWinfow: React.FC<IProps> = ({
  isOpen,
  modalContents,
  onClose,
  customStyles,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={customStyles || defaultModalStyles}
    contentLabel="Example Modal"
  >
    {Boolean(onClose) && (
      <button onClick={onClose} aria-label="Close modal">
        close
      </button>
    )}
    {Boolean(modalContents) && modalContents()}
  </Modal>
);
