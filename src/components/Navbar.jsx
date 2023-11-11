import { useCountries } from "../contexts/CountryContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { toggleDarkMode, darkMode } = useCountries();
  return (
    <div className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.title}>
        <h3>Where in the world?</h3>
      </div>
      <div className="navbar-switch">
        <span>
          {darkMode ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.79C17.8427 11.4922 17.2039 13.1144 16.1583 14.4668C15.1127 15.8192 13.7035 16.8458 12.0957 17.4265C10.4879 18.0073 8.74801 18.1181 7.07952 17.7461C5.41104 17.3741 3.88302 16.5345 2.67425 15.3258C1.46548 14.117 0.625963 12.589 0.253931 10.9205C-0.118101 9.25202 -0.00726056 7.51208 0.573483 5.9043C1.15423 4.29651 2.18085 2.88737 3.53324 1.84175C4.88562 0.79614 6.50782 0.157305 8.21002 0C7.21344 1.34827 6.73387 3.00945 6.85856 4.68141C6.98324 6.35338 7.70388 7.92506 8.88943 9.1106C10.075 10.2961 11.6466 11.0168 13.3186 11.1415C14.9906 11.2662 16.6518 10.7866 18 9.79Z"
                fill="#ffffff"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10.79C18.8427 12.4922 18.2039 14.1144 17.1583 15.4668C16.1127 16.8192 14.7035 17.8458 13.0957 18.4265C11.4879 19.0073 9.74801 19.1181 8.07952 18.7461C6.41104 18.3741 4.88302 17.5345 3.67425 16.3258C2.46548 15.117 1.62596 13.589 1.25393 11.9205C0.881899 10.252 0.992739 8.51208 1.57348 6.9043C2.15423 5.29651 3.18085 3.88737 4.53324 2.84175C5.88562 1.79614 7.50782 1.15731 9.21002 1C8.21344 2.34827 7.73387 4.00945 7.85856 5.68141C7.98324 7.35338 8.70388 8.92506 9.88943 10.1106C11.075 11.2961 12.6466 12.0168 14.3186 12.1415C15.9906 12.2662 17.6518 11.7866 19 10.79Z"
                stroke="#111517"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span onClick={toggleDarkMode}>Drak Mode</span>
      </div>
    </div>
  );
}

export default Navbar;
