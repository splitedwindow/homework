import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Cards from "./pages/Cards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Categories from './pages/Categories'

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" exact element={<Cards />} />
          <Route path="/categories/:tagName" exact element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;