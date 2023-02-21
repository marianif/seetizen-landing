import { FloatingBar, Layout } from "../components"
import {
  Hero,
  FeaturesGrid,
  Mission,
  Features,
  Benefits,
  CallToAction,
} from "../components/Landing"
import ComingSoon from "@/components/ComingSoon/ComingSoon"

export default function Home() {
  return (
    <Layout headerType="landing">
      {/* <ComingSoon /> */}
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
