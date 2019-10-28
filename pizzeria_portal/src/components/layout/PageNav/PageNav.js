import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className='link' >Dashboard</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className='link'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className='link'>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' className='link'>Ordering</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className='link'>Kitchen</NavLink>
  </nav>
);


export default PageNav;