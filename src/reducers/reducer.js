export const initialState = {
  countries: [],
  country: JSON.parse(localStorage.getItem("country")) || {},
  filteredCountries: [],
  homepageIndex: 7,
  query: "",
  searchResult: [],
  filter: "",
  dropdownRef: {},
  status: "",
  darkMode: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "countries":
      return { ...state, countries: action.payload };
    case "country":
      return { ...state, country: action.payload };
    case "isLoading":
      return { ...state, status: action.payload };
    case "loadMore":
      return { ...state, homepageIndex: state.homepageIndex + 4 };
    case "search":
      return { ...state, query: action.payload };
    case "results":
      return { ...state, searchResult: action.payload };
    case "filter":
      return { ...state, filter: action.payload };
    case "filterCountries":
      return { ...state, filteredCountries: action.payload };
    case "dropdown":
      return { ...state, dropdownRef: action.payload };
    case "dark":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}
