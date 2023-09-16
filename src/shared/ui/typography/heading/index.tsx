import styles from './styles.module.scss'

export function Heading({ children }: React.PropsWithChildren) {
  return (
    <h2 className={styles.h2}>{children}</h2>
  )
}