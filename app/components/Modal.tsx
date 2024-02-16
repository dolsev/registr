import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/modal.module.scss';

const Modal = ({ onClose }) => {
    const router = useRouter();

    const copyLink = () => {
        console.log('Link copied!');
    };

    const goToWaitingPage = () => {
        router.push('/waiting');
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                <div className={styles.modalContent}>
                    <h2>Modal Title</h2>
                    <p>This is the modal content.</p>
                    <button onClick={copyLink}>Copy Link</button>
                    <button onClick={goToWaitingPage}>Go to Waiting Page</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
