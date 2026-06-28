import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import MainContext from "./components/MainContext";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />
        
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContext/> } />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
