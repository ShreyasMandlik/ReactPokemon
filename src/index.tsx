import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import ErrorPage from "./components/ErrorPage";
import PokemonDetailsWithId from "./components/PokemonDetailsWithId";
import HomePage from "./components/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      
      {
        path: "pokemons/:Id",
        element: <PokemonDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
