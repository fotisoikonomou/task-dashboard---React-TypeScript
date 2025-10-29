// src/pages/HomePage.tsx

import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to Your Task Dashboard</h1>
      <p className={styles.subtitle}>
        Organize your projects, manage tasks, and collaborate with your team in real-time.
      </p>
      <Link to="/board/1" className={styles.ctaButton}>
        Go to Your Board
      </Link>
    </div>
  );
};

export default HomePage;