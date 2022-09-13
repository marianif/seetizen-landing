import styles from "@/styles/components/Accordion.module.css"
const Accordion = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.innerTop}>
          <h6>Title</h6>
          <p>+</p>
        </div>
        <div className={styles.innerBottom}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            odit aut est quo debitis velit et, ea reprehenderit, non nostrum at
            earum exercitationem quae iure minus ratione! Facere, vero quos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
