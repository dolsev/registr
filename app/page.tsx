import styles from "./page.module.css";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
    return (
        <main className={styles.main}>
            <RegistrationForm />
        </main>
    );
}
