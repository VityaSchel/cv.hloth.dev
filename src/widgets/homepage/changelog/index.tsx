import styles from './styles.module.scss'
import { Changelog } from '@/entities/changelog'

export function ChangelogWidget() {
  return (
    <aside className={styles.changelog}>
      <Changelog />
    </aside>
  )
}