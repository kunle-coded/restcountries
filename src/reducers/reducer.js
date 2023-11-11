export const initialState = {
  countries: [],
  filteredCountries: [],
  homepageIndex: 7,
  query: "",
  searchResult: [],
  filter: "",
  dropdownRef: {},
  status: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "countries":
      return { ...state, countries: action.payload };
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

    default:
      return state;
  }
}
