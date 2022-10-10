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
            Seetizen facilita la ricerca di persone e realtà sul territorio, di
            diffusione e condivisione delle iniziative in città e fornisce allo
            stesso tempo uno strumento di storytelling urbano aperto e
            partecipativo
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
