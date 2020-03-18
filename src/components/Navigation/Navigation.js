// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Styles
import styles from './Navigation.module.css';

const activeLink = {
  color: '#01d277',
};

function Navigation() {
  return (
    <nav className={styles.pageNav}>
      <div className={[styles.wrapper, 'container'].join(' ')}>
        <NavLink to="/" className={styles.siteLogo} exact>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
            alt="logo"
          />
        </NavLink>
        <ul className={styles.siteNavList}>
          <li className={styles.siteNavListItem}>
            <NavLink to="/" exact activeStyle={activeLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.siteNavListItem}>
            <NavLink to="/movies" activeStyle={activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
