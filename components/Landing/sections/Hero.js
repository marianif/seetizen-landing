import Image from "next/image"
import styles from "@/styles/home/Hero.module.css"
import { AppStoreBadge } from "@/components/Landing"
import { FaGooglePlay, FaApple } from "react-icons/fa"

const IMAGE = require("public/images/hero-demo-1.png")
// const IMAGE = require("public/images/hero.png");
const IMAGES = [
  require("public/images/placeholder.png"),
  require("public/images/placeholder.png"),
  require("public/images/placeholder.png"),
]

// Icons properties
const SIZE = 24

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerTop}>
        <div className={styles.column}>
          <h1 className={styles.title}>A Social Media for Urban Communities</h1>
          <p className="text-light p-md">
            Una piattaforma indipendente per sostenere la socialità e le
            iniziative delle comunità locali
          </p>
          <span className={styles.badges}>
            <AppStoreBadge
              title={"google play"}
              icon={<FaGooglePlay size={SIZE} />}
            />
            <AppStoreBadge
              title={"apple store"}
              icon={<FaApple size={SIZE} />}
            />
          </span>
        </div>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image src={IMAGE} layout="responsive" priority />
          </div>
        </div>
      </div>
      {/* <div className={styles.innerBottom}>
        <span>Made with top level technologies: </span>
        <div className={styles.images}>
          {IMAGES.map((image, index) => {
            return (
              <div key={index}>
                <Image src={image} layout="intrinsic" width={200} height={30} />
              </div>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Hero
