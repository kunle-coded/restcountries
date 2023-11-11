/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [
    {
      countries,
      status,
      homepageIndex,
      query,
      searchResult,
      filter,
      filteredCountries,
      dropdownRef,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function fetchCountries() {
    dispatch({ type: "isLoading", payload: "loading" });
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    dispatch({ type: "countries", payload: data });
    dispatch({ type: "isLoading", payload: "ready" });
  }

  useEffect(() => {
    fetchCountries();
  }, []);

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

  return (
    <CountryContext.Provider
      value={{
        countries,
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
