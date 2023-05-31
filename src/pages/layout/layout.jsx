import styles from './layout.module.scss';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from "react-bootstrap";
import { Outlet } from 'react-router';
import { useState } from 'react';

export const Layout = () => {
  return (
    <>
      <Navbar expand="false" bg="dark" variant="dark" style={{ padding: 20 }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/home">Список постов</Nav.Link>
            <Nav.Link href="#/about-me">Обо мне</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className={styles.main__content}>
        <Outlet />
      </main>
    </>
  )
}


