import styles from "@/styles/home/Mission.module.css"

const Mission = () => {
  return (
    <div className={styles.container}>
      <h3 className="text-light">
        La nostra <br />{" "}
        <span className={`${styles.gradient} gradient-text`}>Missione</span>
      </h3>
      <div className={styles.mission}>
        <div>
          <p className="p-md">
            Seetizen nasce come uno strumento di pianificazione, attivazione e
            connessione urbana con lo scopo di rimettere il territorio e le
            relazioni di nuovo al centro rispondendo ai bisogni sociali,
            culturali e aggregativi delle comunità locali.
          </p>
        </div>
        <div>
          <p className="p-md">
            Seetizen mette in rete tutte le realtà sul territorio, consente di
            conoscere nuove persone e realtà, connettersi facilmente e costruire
            qualcosa insieme. Facilita il coordinamento e la diffusione delle
            iniziative sul territorio e semplifica la circolazione di
            informazioni servendo da ponte tra digitale e reale.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
