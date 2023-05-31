import React, { useState, useEffect } from 'react'
import styles from './menu.module.scss';
import PropTypes from 'prop-types';
import { Image, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { events } from '../../events'


export const Menu = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        events.addListener("closeMenu", () => setMenuOpened(false));
        return () => {
            events.removeListener("closeMenu", () => setMenuOpened(false));
        };
    }, [])

    return (
        <>
            <Navbar expand="false" bg="dark" variant="dark" style={{ padding: 20 }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setMenuOpened(!menuOpened)} />
            </Navbar >
            {
                menuOpened && (
                    <div className={styles.menu}>
                        <div className={styles.user__info}>
                            <div className={styles.lala}>
                                <p>Евгений</p>
                                <span className={styles.email}>zzzzz-123@inbox.ru</span>
                            </div>
                        </div>
                        <Image
                            roundedCircle
                            className={styles.avatar}
                            src="https://media.licdn.com/dms/image/C5603AQHodlxbUDxS_Q/profile-displayphoto-shrink_200_200/0/1620033516234?e=1691020800&v=beta&t=qJUqw1UA-elXPUJ9-PCsOlIrvzBKc3QswiNuGwCOE_E"
                            alt="Фото"
                        />
                        <NavLink to="/home" onClick={() => setMenuOpened(false)}><span>Список постов</span></NavLink>
                        <NavLink to="/about-me" onClick={() => setMenuOpened(false)}><span>Обо мне</span></NavLink>
                    </div>
                )
            }
        </>
    );
};
