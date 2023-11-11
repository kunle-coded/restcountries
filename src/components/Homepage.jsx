import { useCountries } from "../contexts/CountryContext";
import Button from "./Button";
import Card from "./Card";
import Header from "./Header";
import styles from "./Homepage.module.css";

function Homepage() {
  const {
    countries,
    homepageIndex,
    searchResult,
    onLoadMore,
    filter,
    filteredCountries,
    onCloseDropdown,
  } = useCountries();

  return (
    <div className={styles.homepage} onClick={(e) => onCloseDropdown(e)}>
      <Header />
      <section className={styles.lists}>
        {searchResult.length >= 1 &&
          searchResult.map(
            (country, index) =>
              index <= homepageIndex && <Card key={index} country={country} />
          )}

        {!filter &&
          searchResult.length < 1 &&
          countries.map(
            (country, index) =>
              index <= homepageIndex && <Card key={index} country={country} />
          )}

        {filter &&
          filteredCountries.map(
            (country, index) =>
              index <= homepageIndex && <Card key={index} country={country} />
          )}
      </section>
      <Button onClick={onLoadMore}>Load More</Button>
    </div>
  );
}

export default Homepage;
