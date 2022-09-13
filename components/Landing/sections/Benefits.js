import styles from "@/styles/home/Benefits.module.css"
import { BsLightbulb } from "react-icons/bs"
import { GiMeepleCircle, GiWorld } from "react-icons/gi"
import benefits from "@/data/benefits"

const SIZE = 26
const COLOR = "#000000"

const Benefits = () => {
  return (
    <div className={styles.container}>
      {benefits.map((item, index) => {
        const { heading, paragraph } = item
        let icon

        index === 0
          ? (icon = <BsLightbulb size={SIZE} color={COLOR} />)
          : index === 1
          ? (icon = <GiWorld size={SIZE} color={COLOR} />)
          : index === 2 && (icon = <GiMeepleCircle size={SIZE} color={COLOR} />)

        return (
          <span key={index}>
            <span className={styles.gradient}>{icon}</span>
            <h4 className="text-light">{heading}</h4>
            <p className="p-sm">{paragraph}</p>
          </span>
        )
      })}
    </div>
  )
}

export default Benefits
