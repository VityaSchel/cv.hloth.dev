import { HomePageWrapper } from '@/widgets/homepage/wrapper'
import { RelevantLinksWidget } from '@/widgets/homepage/relevant-links'
import { ChangelogWidget } from '@/widgets/homepage/changelog'

function HomePage() {
  return (
    <HomePageWrapper>
      <RelevantLinksWidget />
      <ChangelogWidget />
    </HomePageWrapper>
  )
}

export default HomePage
