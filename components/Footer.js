import styles from "@/styles/shared/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const LOGO = require("@/images/logo-no-text.png")

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a>
                <Link href="/">privacy</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/">terms</Link>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.logoContainer}>
          <Image src={LOGO} layout="responsive" />
        </div>
      </div>
      <div className={styles.container}>
        {/* <div  /> */}
        <p className={styles.credits}>© Seetizen 2022. Made in Turin</p>
      </div>
    </div>
  )
}

export default Footer
