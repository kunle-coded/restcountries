import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
