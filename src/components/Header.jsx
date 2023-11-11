import { useEffect, useRef } from "react";
import { useCountries } from "../contexts/CountryContext";
import styles from "./Header.module.css";

function Header() {
  const {
    query,
    onInput,
    onSearch,
    onOpenFilter,
    onFilter,
    filter,
    onSaveDropdownRef,
    darkMode,
  } = useCountries();

  const ref = useRef(null);

  useEffect(() => {
    onSaveDropdownRef(ref);
  }, []);

  return (
    <div className={styles.header}>
      <div className={`${styles.search} ${darkMode ? styles.dark : ""}`}>
        <span onClick={() => onSearch(query)}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.11 15.11L19.48 19.48"
              stroke={darkMode ? "#fff" : "#858585"}
              strokeWidth="2.16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9.49143C2 13.6288 5.35402 16.9829 9.49143 16.9829C11.5637 16.9829 13.4395 16.1414 14.7957 14.7816C16.1473 13.4266 16.9829 11.5566 16.9829 9.49143C16.9829 5.35402 13.6288 2 9.49143 2C5.35402 2 2 5.35402 2 9.49143Z"
              stroke={darkMode ? "#fff" : "#858585"}
              strokeWidth="2.16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          className={darkMode ? styles.darkInput : ""}
          type="text"
          value={query}
          placeholder="Search for a country..."
          onChange={(e) => onInput(e.target.value)}
        />
      </div>
      <div className={styles.filter}>
        <div
          className={`${styles.select} ${darkMode ? styles.darkSelect : ""}`}
          onClick={() => onOpenFilter(ref)}
          id="select-filter"
        >
          <p>{filter ? filter : "Filter by Region"}</p>
          <span id="filter-icon">
            <svg
              id="icon"
              width="14"
              height="6"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 11L21 1"
                stroke={darkMode ? "#fff" : "#858585"}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div
          ref={ref}
          className={`${styles.options} ${darkMode ? styles.darkOptions : ""}`}
        >
          <ul onClick={(e) => onFilter(e.target.textContent)}>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
