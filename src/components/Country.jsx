/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Country.module.css";
import { useCountries } from "../contexts/CountryContext";
import { useEffect, useState } from "react";

function Country() {
  const { country, darkMode, handleBorderClick } = useCountries();
  const navigate = useNavigate();
  const [languages, setLanguages] = useState([]);
  const [nativeName, setNativeName] = useState("");

  const population = new Intl.NumberFormat().format(country.population);

  useEffect(() => {
    function getNativeNames() {
      const lngKeys = Object.keys(country.name.nativeName);
      const native = country.name.nativeName[lngKeys];

      const lang = Object.keys(country.languages)[0];
      const nativeNameKeys = country.name.nativeName[lang];

      if (nativeNameKeys) {
        const nativeName = nativeNameKeys.common;
        setNativeName(nativeName);
      } else if (native) {
        const lngs = native.common;
        setNativeName(lngs);
      }
    }

    function getLanguages() {
      const lngs = [];
      const lngKeys = Object.keys(country.languages);

      lngKeys.forEach((key) => {
        const language = country.languages[key];
        lngs.push(language);
      });
      setLanguages(lngs);
    }

    getNativeNames();
    getLanguages();
  }, [country]);

  return (
    <div className={styles.country}>
      <div className={styles.btn}>
        <button
          className={`${styles.button} ${darkMode ? styles.darker : ""}`}
          onClick={() => navigate("/")}
        >
          <span>&larr;</span> Back
        </button>
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
                {languages.map(
                  (lang, i) => `${lang}${i < languages.length - 1 ? ", " : ""}`
                )}
              </p>
            </div>
          </div>
          <div className={styles.borders}>
            <div className={styles.border}>
              <strong>Border Countries: </strong>
            </div>
            <div className={styles.neighbours}>
              {country.fullBorders.length > 1
                ? country.fullBorders.map((border, i) => (
                    <Link key={i} to={`/country/${border}`}>
                      <div
                        className={`${styles.neighbour} ${
                          darkMode ? styles.dark : ""
                        }`}
                        onClick={() => handleBorderClick(border)}
                      >
                        {border}
                      </div>
                    </Link>
                  ))
                : "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
