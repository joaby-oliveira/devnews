import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import styles from './styles.module.scss'
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="DevNews!" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}
