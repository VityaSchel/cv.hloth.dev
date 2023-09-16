import styles from './styles.module.scss'
import { Heading } from '@/shared/ui/typography/heading'

export function Changelog() {
  return (
    <>
      <Heading>Changelog</Heading>
      <ul className={styles.changes}>
        <li>v4 — Changed 2 key projects and hard skills</li>
        <li>v3 — Fixed mistakes in English grammar</li>
        <li>v2 — Made small changes to soft skills section</li>
        <li>v1 — My first resume!</li>
      </ul>
    </>
  )
}