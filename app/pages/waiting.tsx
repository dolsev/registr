// pages/waiting.tsx

import { useRouter } from 'next/router';
import Layout from '../layout';

const WaitingPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Function to determine the message based on the provided ID
    const getMessage = (id: string | string[] | undefined) => {
        const idValue = Array.isArray(id) ? id[0] : id;

        switch (idValue) {
            case '1':
                return 'Запрос обрабатывается';
            case '2':
                return 'Запрос обработан';
            case '3':
                return 'Запрос отклонен';
            default:
                return 'Страница не найдена';
        }
    };

    return (
        <Layout>
            <div>
                <h1>Страница ожидания ответа</h1>
                <p>{getMessage(id)}</p>
                {id === '2' && (
                    <p>
                        <a href="/registration/2">Продолжить регистрацию</a>
                    </p>
                )}
            </div>
        </Layout>
    );
};

export default WaitingPage;
