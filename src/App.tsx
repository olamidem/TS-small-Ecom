import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import MainContext from "./components/MainContext";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />

        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContext />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
