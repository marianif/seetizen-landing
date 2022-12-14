import styles from "@/styles/components/StoreBadge.module.css"

const AppStoreBadge = ({ title, icon }) => {
  return (
    <div className={styles.container}>
      <span>{icon}</span>
      <a href="#cta">
        <p>{title}</p>
      </a>
    </div>
  )
}

export default AppStoreBadge
