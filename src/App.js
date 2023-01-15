import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import General from "./screens/General";
import Billing from "./screens/Billing";
import Plan from "./screens/Plan";
import Users from "./screens/Users";
import Integrations from "./screens/Integrations";
import Navbar from "./components/Navbar";
import { createContext, useContext, useState } from "react";

export const NavUserContext = createContext("navpage");

function App() {
  const [isPage, setIsPage] = useState("/");
  const [editToggle, setEditToggle] = useState(null);
  return (
    <NavUserContext.Provider value={{isPage, setIsPage, editToggle, setEditToggle}}>
    <div className="App">
      <div className="container flex flex-col mx-auto md:mt-8 mt-3 w-full h-full md:p-0 p-2 space-y-6">
        <h1 className="text-2xl font-sans font-semibold">Company Settings</h1>
        <Navbar />
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/users" element={<Users />} />
            <Route path="/integrations" element={<Integrations />} />
            </Routes>
        </div>
      </div>
    </NavUserContext.Provider>
  );
}

export default App;
