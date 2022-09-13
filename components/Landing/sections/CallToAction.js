import styles from "@/styles/home/CTA.module.css"
import { AppStoreBadge } from "@/components/Landing"
import { FaGooglePlay, FaApple } from "react-icons/fa"

// Icons properties
const SIZE = 24

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <h2 className="text-light">
        Ready to <br />
        become a <br />{" "}
        <span className={`gradient-text ${styles.gradientText}`}>Seetizen</span>
        ?
      </h2>
      <span className={styles.badges}>
        <AppStoreBadge
          title={"google play"}
          icon={<FaGooglePlay size={SIZE} />}
        />
        <AppStoreBadge title={"apple store"} icon={<FaApple size={SIZE} />} />
      </span>
    </div>
  )
}

export default CallToAction
