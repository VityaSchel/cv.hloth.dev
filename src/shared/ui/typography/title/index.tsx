import styles from './styles.module.scss'

export function Title({ children }: React.PropsWithChildren) {
  return (
    <h1 className={styles.h1}>{children}</h1>
  )
}