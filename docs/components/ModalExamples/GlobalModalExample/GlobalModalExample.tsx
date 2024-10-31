'use client';
import React from 'react';
import { GlobalModals, Modal, useModal } from '@start-base/react-modal';
import Button from '@start-base/start-ui/Button';

import styles from './GlobalModalExample.module.scss';

export default function GlobalModalExample() {
  const { closeModal, openModal } = useModal();

  return (
    <GlobalModals>
      <div className={styles.buttons}>
        <Button onClick={() => openModal('modal')}>Modal</Button>
        <Button onClick={() => openModal('left-sidebar')}>Left Sidebar</Button>
        <Button onClick={() => openModal('right-sidebar')}>
          Right Sidebar
        </Button>
        <Button onClick={() => openModal('drawer')}>Drawer</Button>
        <Button onClick={() => openModal('full-page')}>Full Page</Button>
      </div>
      <Modal
        name="modal"
        isOpen={false}
        className={styles.modal}
        overlayClassName={styles.overlay}
        appElement={'html'}
        closeTimeoutMS={300}
      >
        <div>
          <span className={styles.title}>Modal</span>
          <Button fluid onClick={() => closeModal('modal')}>
            Close
          </Button>
        </div>
      </Modal>
      <Modal
        name='left-sidebar'
        isOpen={false}
        className={styles.leftSidebar}
        overlayClassName={styles.overlay}
        appElement={"html"}
        closeTimeoutMS={300}
      >
        <div>
          <span className={styles.title}>Left Sidebar</span>
          <Button fluid onClick={() => closeModal("left-sidebar")}>Close</Button>
        </div>
      </Modal>
      <Modal
        name='right-sidebar'
        isOpen={false}
        className={styles.rightSidebar}
        overlayClassName={styles.overlay}
        appElement={"html"}
        closeTimeoutMS={300}
      >
        <div>
          <span className={styles.title}>Right Sidebar</span>
          <Button fluid onClick={() => closeModal("right-sidebar")}>Close</Button>
        </div>
      </Modal>
      <Modal
        name='drawer'
        isOpen={false}
        className={styles.drawer}
        overlayClassName={styles.drawerOverlay}
        appElement={"html"}
        closeTimeoutMS={300}
      >
        <div>
          <span className={styles.title}>Drawer</span>
          <Button fluid onClick={() => closeModal("drawer")}>Close</Button>
        </div>
      </Modal>
      <Modal
        name='full-page'
        isOpen={false}
        className={styles.fullPage}
        appElement={"html"}
        closeTimeoutMS={300}
        overlayClassName={styles.fullPageOverlay}
      >
        <div>
          <span className={styles.title}>Full Page</span>
          <Button fluid onClick={() => closeModal("full-page")}>Close</Button>
        </div>
      </Modal>
    </GlobalModals>
  );
}
