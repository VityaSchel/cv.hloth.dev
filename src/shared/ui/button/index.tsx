import styles from './styles.module.scss'
import cx from 'classnames'

export function Button({ children, ...props }: React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cx(styles.button, styles.light)} {...props}>
      {children}
    </button>
  )
}