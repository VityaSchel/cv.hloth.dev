import styles from './styles.module.scss'
import { Title } from '@/shared/ui/typography/title'
import { Subtitle } from '@/shared/ui/typography/subtitle'
import { Button } from '@/shared/ui/button'

export function Card({ title, subtitle, /*image, */button }: {
  title: string
  subtitle: string
  // image: string
  button: {
    label: string
    url: string
  }
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <div className={styles.actionsBox}>
        <a href={button.url}><Button tabIndex={-1}>{button.label}</Button></a>
      </div>
    </div>
  )
}