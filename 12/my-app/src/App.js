import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Cards from "./pages/Cards";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact"

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Categories from "./pages/Categories";
import Card from "./pages/Card";

function App() {
  const [showSidebar, setShowSidebar] = React.useState();
  const handleToggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/categories/:tagName" element={<Categories />} />
          <Route path="/:id" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact /> } />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
