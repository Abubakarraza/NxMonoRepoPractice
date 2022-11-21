import styles from './header.module.scss';
import Ui from './ui/Ui';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
      <Ui />
    </div>
  );
}

export default Header;
