/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useCountries } from "../contexts/CountryContext";

function Card({ country }) {
  const { onCountryClick, darkMode } = useCountries();
  const population = new Intl.NumberFormat().format(country.population);
  return (
    <Link to={`country/${country.name.common}`}>
      <div
        className={`${styles.card} ${darkMode ? styles.dark : ""}`}
        onClick={() => onCountryClick(country)}
      >
        <div className={styles.flag}>
          <img src={country.flags.png} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <h3>{country.name.common}</h3>
          </div>
          <div className={styles.stats}>
            <p>
              <span>
                <strong>Population: </strong>
              </span>
              {population}
            </p>
            <p>
              <span>
                <strong>Region: </strong>
              </span>
              {country.region}
            </p>
            <p>
              <span>
                <strong>Capital: </strong>
              </span>
              {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
