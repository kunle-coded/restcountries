/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({ country }) {
  const population = new Intl.NumberFormat().format(country.population);
  return (
    <div className={styles.card}>
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
  );
}

export default Card;
