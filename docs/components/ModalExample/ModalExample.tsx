'use client';
import { GlobalModals, Modal, useModal } from '@start-base/react-modal';
import Button from '@start-base/start-ui/Button';

import styles from './ModalExample.module.scss';

export default function Modals() {
  const { closeModal, openModal } = useModal();

  return (
    <GlobalModals>
      <div>
        <Button onClick={() => openModal("modal")}>
          Modal
        </Button>
        <Button onClick={() => openModal("left-sidebar")}>
          Left Sidebar
        </Button>
        <Button onClick={() => openModal("right-sidebar")}>
          Right Sidebar
        </Button>
        <Button onClick={() => openModal("drawer")}>
          Drawer
        </Button>
        <Button onClick={() => openModal("full-page")}>
          Full Page
        </Button>
      </div>
      <Modal name="modal" isOpen={false}>
        <div>
          <h5>Modal</h5>
        </div>
      </Modal>
      <Modal
        name="left-sidebar"
        className={styles.leftSidebar}
        overlayClassName={styles.noOverlay}
        shouldCloseOnOverlayClick={false}
        isOpen={false}
      >
        <div>
          <h5>Left Sidebar</h5>
          <Button onClick={() => closeModal('left-sidebar')}>
            Close
          </Button>
        </div>
      </Modal>
      <Modal name="right-sidebar" className={styles.rightSidebar} isOpen={false}>
        <div>
          <h5>Right Sidebar</h5>
        </div>
      </Modal>
      <Modal
        name="drawer"
        className={styles.drawer}
        overlayClassName={styles.noOverlay}
        shouldCloseOnOverlayClick={false}
        isOpen={false}
      >
        <div>
          <h5>Drawer</h5>
          <Button onClick={() => closeModal('drawer')}>
            Close
          </Button>
        </div>
      </Modal>
      <Modal name="full-page" className={styles.fullPage} isOpen={false}>
        <div>
          <h5>Full Page</h5>
          <Button onClick={() => closeModal('full-page')}>
            Close
          </Button>
        </div>
      </Modal>
    </GlobalModals>
  );
}