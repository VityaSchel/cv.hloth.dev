import styles from './styles.module.scss'
import { Card } from '@/shared/ui/card'

export function ResumeCardLinks() {
  return (
    <div className={styles.cards}>
      <Card title='Resume' subtitle='My single-page resume/CV in English, compressed to 5 MB' button={{ label: 'Open', url: '/v4/En.pdf' }} />
      <Card title='Resume (27,5 MB)' subtitle={'The same PDF file, but it\'s exported from Figma without optimization'} button={{ label: 'Open', url: '/v4/En-optimized.pdf' }} />
      <Card title='Резюме' subtitle='Одностраничное резюме/CV на русском, сжатое до 5 МБ' button={{ label: 'Открыть', url: '/v4/Ru.pdf' }} />
      <Card title='Резюме (27,5 MB)' subtitle={'Тот же PDF файл, но он экспортирован из Figma без сжатия'} button={{ label: 'Открыть', url: '/v4/Ru-optimized.pdf' }} />
    </div>
  )
}