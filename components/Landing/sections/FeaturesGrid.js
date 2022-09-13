import styles from "@/styles/home/FeaturesGrid.module.css"
import GridItem from "../GridItem"
import features from "@/data/featuresGrid"

const FeaturesGrid = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Features</h3>
      <div className={styles.grid}>
        {features.map((item, index) => {
          return <GridItem item={item} key={index} />
        })}
      </div>
    </section>
  )
}

export default FeaturesGrid
