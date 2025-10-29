// src/components/common/Header.tsx

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Task Dashboard</NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* Αυτό το link θα είναι δυναμικό στο μέλλον */}
            <NavLink 
              to="/board/1" 
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              My Board
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;