import { useCountries } from "../contexts/CountryContext";
import styles from "./Button.module.css";

function Button({ onClick, children }) {
  const { darkMode } = useCountries();
  return (
    <div
      className={`${styles.button} ${darkMode ? styles.dark : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
