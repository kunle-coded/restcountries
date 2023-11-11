/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import Button from "./Button";
import styles from "./Country.module.css";
import { useCountries } from "../contexts/CountryContext";

function Country() {
  const { country } = useCountries();
  const navigate = useNavigate();

  const population = new Intl.NumberFormat().format(country.population);

  // Function to get the first property of an object
  //   const getFirstProperty = (obj) => {
  //     const firstKey = Object.keys(obj)[0];
  //     console.log(firstKey);
  //     return { key: firstKey, value: obj[firstKey] };
  //   };

  const lang = Object.keys(country.languages)[0];
  const nativeNameKeys = country.name.nativeName[lang];
  const nativeName = nativeNameKeys.common;

  //   const firstNativeNameKey = nativeNameKeys[0];

  //   if (firstNativeNameKey) {
  //     const firstNativeName = country.nativeName[firstNativeNameKey];
  //     console.log(firstNativeName);
  //     // Output: { official: 'République du Bénin', common: 'Bénin' }
  //   }

  //   console.log(nativeNameKeys);
  return (
    <div className={styles.country}>
      <div className={styles.btn}>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <div className={styles.details}>
        <div className={styles.flag}>
          <img src={country.flags.png} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <h3>{country.name.common}</h3>
          </div>
          <div className={styles.statistics}>
            <div className={styles.left}>
              <p>
                <span>
                  <strong>Native Name: </strong>
                </span>
                {nativeName}
              </p>
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
                  <strong>Sub Region: </strong>
                </span>
                {country.subregion}
              </p>
              <p>
                <span>
                  <strong>Capital: </strong>
                </span>
                {country.capital}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <span>
                  <strong>Top Level Domain: </strong>
                </span>
                {country.tld}
              </p>
              <p>
                <span>
                  <strong>Currencies: </strong>
                </span>
                {Object.keys(country.currencies)[0]}
              </p>
              <p>
                <span>
                  <strong>Languages: </strong>
                </span>
                {Object.keys(country.languages)[0]}
              </p>
            </div>
          </div>
          <div className={styles.borders}>
            <div className={styles.border}>
              <p>
                <span>
                  <strong>Border Countries: </strong>
                </span>
              </p>
            </div>
            <div className={styles.neighbours}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
