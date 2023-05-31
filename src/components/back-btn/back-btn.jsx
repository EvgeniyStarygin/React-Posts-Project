import React from 'react'
import styles from './back-btn.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { events } from '../../events';

export const BackBtn = () => (
    <NavLink to="/" onClick={() => events.emit("closeMenu")}>
        <Button variant="warning" className={styles.back__btn}>Назад</Button>
    </NavLink>
);




