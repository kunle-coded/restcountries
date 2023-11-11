import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { CountryProvider } from "./contexts/CountryContext";
import DetailScreen from "./screens/DetailScreen";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="country/:id" element={<DetailScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
