import React from 'react'
import styles from './load-page.module.scss';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

export const LoadPage = ({ where }) => {
    return (
        <div className={where === "comments" ? styles.load__comments : styles.load__page}>
            <Spinner animation="border" variant="warning" style={{ width: 100, height: 100 }} />
        </div>
    );
};

