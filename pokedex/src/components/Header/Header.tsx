import styles from './Header.module.scss';
export default function Header() {
  return (
    <header>
      <img id={`${styles.pokeball__logo}`} src="/pokeball.png" alt="pokeball logo" />
      <nav>
        <ul>
          <li className={`${styles.li}`}>HOME</li>
          <li>DASHBOARD</li>
          <li>ABOUT</li>
        </ul>
      </nav>
      <img id='filter__logo' src="/filter.png" alt="filter icon" />
    </header>
  )
}
