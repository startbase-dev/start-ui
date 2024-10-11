import React, { useState } from 'react';
import { Modal } from '@start-base/react-modal';
import styles from './ModalExample.module.scss';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        name="local-modal-example"
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={() => setIsOpen(false)}
      >
        <h1>Hello World</h1>
      </Modal>
    </div>
  );
}
