import styles from './layout.module.scss';
import { Outlet } from 'react-router';
import { Menu } from '../../components/menu';

export const Layout = () => {
  return (
    <>
      <Menu/>
      <main className={styles.main__content}>
        <Outlet />
      </main>
    </>
  )
}


