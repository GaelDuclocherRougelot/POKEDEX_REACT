import styles from './Header.module.scss';
export default function Header() {
  return (
    <header>
      <ul>
        <li className={`${styles.li}`}>HOME</li>
        <li>DASHBOARD</li>
        <li>ABOUT</li>
      </ul>
    </header>
  )
}
