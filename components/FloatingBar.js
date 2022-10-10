import styles from "@/styles/components/FloatingBar.module.css"
import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

const FloatingBar = () => {
  const [show, setShow] = useState(true)
  return (
    <div className={show ? styles.wrapper : styles.hidden}>
      <span>
        <AiFillCloseCircle
          size={26}
          color={"#fff"}
          onClick={() => setShow(false)}
        />
      </span>
      <div className={styles.container}>
        <div className={styles.innerLeft}>
          <p>Hai già un account?</p>
        </div>
        <div className={styles.innerRight}>
          <a href="https://seetizen.vercel.app" target={"	_blank"}>
            Vai alla dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

export default FloatingBar
