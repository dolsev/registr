'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import styles from '../styles/registration.module.scss';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
        setSubmitted(true);
        setShowModal(true); // Step 3: Show modal upon successful form submission
    };

    return (
        <div className={styles.container}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="firstName">Имя:</label>
                    <input {...register('firstName', { required: true })} />
                    {errors.firstName && <span className={styles.error}>Поле "Имя" обязательно для заполнения</span>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="lastName">Фамилия:</label>
                    <input {...register('lastName', { required: true })} />
                    {errors.lastName && <span className={styles.error}>Поле "Фамилия" обязательно для заполнения</span>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span className={styles.error}>Поле "Email" обязательно для заполнения</span>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" {...register('phone', { required: true })} />
                    {errors.phone && <span className={styles.error}>Поле "Телефон" обязательно для заполнения</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Зарегистрироваться</button>
            </form>
            {submitted && (
                <div className={styles.successMessage}>
                    Форма успешно отправлена! Можете скопировать ссылку или перейти на другую страницу.
                </div>
            )}
            {showModal && (
                <div>
                    <Modal onClose={closeModal} />
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
