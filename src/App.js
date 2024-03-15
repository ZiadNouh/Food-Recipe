import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Details from "./pages/DetailsPage";
import Favourites from "./pages/FavouritesPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
