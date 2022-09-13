import { Layout } from "../components"
import {
  Hero,
  FeaturesGrid,
  Solution,
  Features,
  Benefits,
  CallToAction,
} from "../components/Landing"

export default function Home() {
  return (
    <Layout headerType="landing">
      <Hero />
      <Solution />
      <FeaturesGrid />
      <Features />
      <Benefits />
      <CallToAction />
    </Layout>
  )
}
