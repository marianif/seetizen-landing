import styles from "@/styles/home/Container.module.css";
import Image from "next/image";

const Container = ({ reverse, img, children }) => {
  return (
    <div className={reverse ? styles.containerReverse : styles.container}>
      <div className={styles.column}>
        <div className={styles.imageContainer}>
          <Image src={img} layout="responsive" height={1} width={1} />
        </div>
      </div>
      <div className={styles.column}>{children}</div>
    </div>
  );
};

export default Container;
