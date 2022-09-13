import styles from "@/styles/components/GradientHeadline.module.css";

const GradientHeadline = ({ children, label, number }) => {
  return (
    <div className={styles.container}>
      <span>{number}</span>
      <p className={styles.label}>{label}</p>
      <h3>{children}</h3>
    </div>
  );
};

export default GradientHeadline;
