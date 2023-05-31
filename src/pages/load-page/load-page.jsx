import React from 'react'
import styles from './load-page.module.scss';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

export const LoadPage = () => {
    return (
        <div className={styles.load__page}>
            <Spinner animation="border" variant="warning"/>
        </div>
    );
};

