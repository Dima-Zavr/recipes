import styles from "./styles.module.css"

export const Button = ({ children, onClick, type }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
)
