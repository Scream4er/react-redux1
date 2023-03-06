import React from "react";
import { MainPage, CartPage } from "../pages";
import ErrorBoundry from "../error-boundry";
import {Route, Routes} from "react-router-dom";

import Background from "../menu-list/food-bg.jpg";

const App = () => {
  return (
    <Routes>
        <Route
            element={<MainPage />}
            path="/"
            errorElement={<ErrorBoundry />}
        />
        <Route
            element={<CartPage />}
            path="/cart"
            errorElement={<ErrorBoundry />}
        />
    </Routes>
  );
};

export default App;
