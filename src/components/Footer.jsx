import { useCountries } from "../contexts/CountryContext";

function Footer() {
  const { darkMode } = useCountries();
  return (
    <footer className={`footer ${darkMode ? "darkFooter" : ""}`}>
      <p>
        <i>Created by Kunle Adesokan</i>
      </p>
    </footer>
  );
}

export default Footer;
