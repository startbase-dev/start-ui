import React, { useState } from 'react';
import { Modal } from '@start-base/react-modal';
import styles from './ModalExample.module.scss';
import Button from '@start-base/start-ui/Button';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        name="local-modal-example"
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <span className={styles.title}>Hello World</span>
          <Button fluid onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
