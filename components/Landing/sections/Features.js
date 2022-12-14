import styles from "@/styles/home/Features.module.css"
import Container from "../Container"
import GradientHeadline from "../GradientHeadline"
import features from "@/data/features"
import React from "react"

const MOCKUPS = [
  require("@/images/social-map.png"),
  require("@/images/share.png"),
  require("@/images/discovery.png"),
  require("@/images/urban-stories.png"),
]

const Features = () => {
  return (
    <div className={styles.wrapper}>
      {features.slice(0, 3).map((item, index) => {
        const { previews, heading, label, impressum, img } = item
        return (
          <React.Fragment key={index}>
            <GradientHeadline label={label} number={index + 1}>
              {heading}
            </GradientHeadline>
            <div className={styles.impressum}>
              <p className={`p-md`}>{impressum}</p>
            </div>
            <Container img={MOCKUPS[index]}>
              {previews.map((preview, index) => {
                return (
                  <span className={styles.previewContainer} key={index}>
                    <h4>{preview.heading}</h4>
                    <p className="p-sm">{preview.paragraph}</p>
                  </span>
                )
              })}
            </Container>
          </React.Fragment>
        )
      })}
      <GradientHeadline label={features[3].label} number={4}>
        {features[3].heading}
      </GradientHeadline>
      <div className={styles.impressum}>
        <p className={`p-md`}>{features[3].impressum}</p>
      </div>
      <Container img={MOCKUPS[3]} reverse>
        <span className={styles.previewContainer}>
          <h4>{features[3].previews[0].heading}</h4>
          <p className="p-sm">{features[3].previews[0].paragraph}</p>
        </span>
        <span className={styles.previewContainer}>
          <h4>{features[3].previews[1].heading}</h4>
          <p className="p-sm">{features[3].previews[1].paragraph}</p>
        </span>
        <span className={styles.previewContainer}>
          <h4>{features[3].previews[2].heading}</h4>
          <p className="p-sm">{features[3].previews[2].paragraph}</p>
        </span>
      </Container>
    </div>
  )
}

export default Features
