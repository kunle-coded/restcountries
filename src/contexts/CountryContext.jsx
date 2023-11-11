/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [
    {
      countries,
      country,
      borders,
      status,
      homepageIndex,
      query,
      searchResult,
      filter,
      filteredCountries,
      dropdownRef,
      darkMode,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function getBorders(country) {
    const bordersToAdd = [];
    const borders = country.borders;

    if (borders) {
      borders.forEach(async (code) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();

        const cntry = data[0];
        bordersToAdd.push(cntry.name.common);
      });
    }

    return bordersToAdd;
  }

  async function fetchCountries() {
    dispatch({ type: "isLoading", payload: "loading" });
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const updatedCountries = [];

    data.forEach((country) => {
      const borders = getBorders(country);
      updatedCountries.push({ ...country, fullBorders: borders });
    });

    dispatch({ type: "countries", payload: updatedCountries });
    dispatch({ type: "isLoading", payload: "ready" });
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  function onCountryClick(selected) {
    localStorage.setItem("country", JSON.stringify(selected));
    dispatch({ type: "country", payload: selected });
  }

  function onInput(input) {
    dispatch({ type: "search", payload: input });
    dispatch({ type: "results", payload: [] });
    dispatch({ type: "filter", payload: "" });
  }

  function onSearch(searchQuery) {
    const formatQuery = searchQuery.toLowerCase();
    const searchCountries = [];

    countries.forEach((country) => {
      const formatName = country.name.common.toLowerCase();

      if (
        formatName.includes(formatQuery) ||
        formatName.slice(0, 3) === formatQuery.slice(0, 3)
      ) {
        searchCountries.push(country);
      }
    });

    dispatch({ type: "results", payload: searchCountries });
  }

  function onLoadMore() {
    dispatch({ type: "loadMore" });
  }

  function onSaveDropdownRef(ref) {
    dispatch({ type: "dropdown", payload: ref });
  }

  function onOpenFilter() {
    dropdownRef.current.classList.toggle("dropdown");
  }

  function onCloseDropdown(el) {
    if (
      !(
        el.target.id === "filter-icon" ||
        el.target.id === "icon" ||
        el.target.id === "select-filter"
      )
    ) {
      if (dropdownRef.current.classList.contains("dropdown")) {
        dropdownRef.current.classList.remove("dropdown");
      } else {
        return;
      }
    }
  }

  function onFilter(item) {
    dispatch({ type: "filter", payload: item });

    const itemToAdd = [];

    countries.forEach((country) => {
      if (country.region.includes(item)) {
        itemToAdd.push(country);
      }
    });

    dispatch({ type: "filterCountries", payload: itemToAdd });

    if (item === filter) {
      dispatch({ type: "filter", payload: "" });
      dispatch({ type: "filterCountries", payload: [] });
    }
    dispatch({ type: "results", payload: [] });
    dispatch({ type: "search", payload: "" });
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    dispatch({ type: "dark" });
  }

  return (
    <CountryContext.Provider
      value={{
        countries,
        country,
        borders,
        status,
        homepageIndex,
        query,
        onInput,
        onSearch,
        searchResult,
        onLoadMore,
        onOpenFilter,
        onFilter,
        filter,
        filteredCountries,
        onCloseDropdown,
        onSaveDropdownRef,
        onCountryClick,
        toggleDarkMode,
        darkMode,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountryContext);

  if (context === undefined)
    throw new Error("CountryContext was used outside the CountryProvider");

  return context;
}

export { CountryProvider, useCountries };
