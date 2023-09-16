import styles from './styles.module.scss'

export function Subtitle({ children }: React.PropsWithChildren) {
  return (
    <p className={styles.p}>{children}</p>
  )
}