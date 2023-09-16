import styles from './styles.module.scss'

export function HomePageWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}