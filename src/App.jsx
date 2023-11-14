import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { CountryProvider } from "./contexts/CountryContext";
import DetailScreen from "./screens/DetailScreen";
import Country from "./components/Country";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="country" element={<DetailScreen />}>
            <Route path=":id" element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
