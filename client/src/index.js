import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";

// configureStore is a function that takes an object as an argument
const store = configureStore({
  // reducer is a property that takes an object as an argument
  reducer: { cart: cartReducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<--- Provider is a component that wraps the entire app and makes the store available to all components */}
    <Provider store={store}>
      {/* theme is a prop that is passed to the ThemeProvider component and is used to style the entire app */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline is a component that provides a default style for the entire app */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
