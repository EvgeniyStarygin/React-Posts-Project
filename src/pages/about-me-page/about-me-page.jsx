import React from 'react'
import styles from './about-me-page.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { events } from '../../events';
import { Button } from 'react-bootstrap';
import { BackBtn } from '../../components/back-btn';

export const AboutMePage = () => {
  return (
    <>
      <BackBtn />
      <h2>Обо мне</h2>
      <p style={{ padding: 20 }}>Обо мне - <a href="https://www.linkedin.com/in/yauheni-s-6a80161b3/">https://www.linkedin.com/in/yauheni-s-6a80161b3/</a> =)</p>
    </>
  );
};

