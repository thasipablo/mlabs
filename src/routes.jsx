import { createBrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import { RoutNames } from "./data/RouteNames";
import Dashboard from "./pages/dashboard/Dashboard";
import Examens from "./pages/dashboard/examens/Examens";
import Home from "./pages/dashboard/home/Home";
import Patients from "./pages/dashboard/patients/Patients";
import Personnel from "./pages/dashboard/personnel/Personnel";
import Rapport from "./pages/dashboard/rapport/Rapport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: RoutNames.ACCUEIL,
        element: <Home />,
      },
      {
        path: RoutNames.PATIENT,
        element: <Patients />
      },
      {
        path: RoutNames.EXAMENS,
        element: <Examens />
      },
      {
        path: RoutNames.PERSONNEL,
        element: <Personnel />
      },
      {
        path: RoutNames.RAPPORT,
        element: <Rapport />
      },
    ],
  },
]);
