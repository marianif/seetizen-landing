import styles from "@/styles/home/CTA.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import { BsCheck2Circle } from "react-icons/bs"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID

// Icons properties
const COLOR = "#8ffe09"

const CallToAction = () => {
  const [value, setValue] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [button, setButton] = useState({
    text: "Registrati",
    disabled: false,
  })
  const formRef = useRef()

  const onSubmit = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()

      const res = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      console.log(res)
      if (res.text === "OK") {
        setShowSuccess(true)
        setButton({
          text: "Fatto!",
          disabled: true,
        })
      }
      setLoading(false)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <div className={styles.container} id="cta">
      <h2 className="text-light">
        Registrati per la beta!
        {/* <span className={`gradient-text ${styles.gradientText}`}>Seetizen</span> */}
      </h2>
      <div className={styles.formContainer}>
        <form ref={formRef} className={styles.form}>
          <input
            type="email"
            name="tester_email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
            placeholder="Inserisci la tua email"
          />
          {!loading ? (
            <button
              type="submit"
              className={styles.formButton}
              onClick={onSubmit}
              disabled={button.disabled}
            >
              {button.text}
            </button>
          ) : (
            <ClipLoader
              color={COLOR}
              loading={loading}
              size={36}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </form>
        {showSuccess && (
          <div className={styles.success}>
            <BsCheck2Circle size={30} color={COLOR} />
            <p>Grazie per la tua registrazione!</p>
          </div>
        )}
      </div>
      {/* <span className={styles.badges}>
        <AppStoreBadge
          title={"google play"}
          icon={<FaGooglePlay size={SIZE} />}
        />
        <AppStoreBadge title={"apple store"} icon={<FaApple size={SIZE} />} />
      </span> */}
    </div>
  )
}

export default CallToAction
