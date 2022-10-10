import { FloatingBar, Layout } from "../components"
import {
  Hero,
  FeaturesGrid,
  Mission,
  Features,
  Benefits,
  CallToAction,
} from "../components/Landing"

export default function Home() {
  return (
    <Layout headerType="landing">
      <Hero />
      <Mission />
      <FeaturesGrid />
      <Features />
      <Benefits />
      <CallToAction />
      <FloatingBar />
    </Layout>
  )
}
