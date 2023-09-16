import { Card } from '@/shared/ui/card'

export function ResumeCardLinks() {
  return (
    <>
      <Card title="Resume" subtitle="My resume" button={{ label: 'Download', url: '/resume.pdf' }} />
    </>
  )
}