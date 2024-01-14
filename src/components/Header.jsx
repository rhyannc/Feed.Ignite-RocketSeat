import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo"/>
      <div className={styles.headerlogo}>
      <strong>Ignite Feed</strong>
      </div>
      
    </header>
  );
}