import { createBrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import { RouteNames } from "./data/RouteNames";
import Dashboard from "./pages/dashboard/Dashboard";
import Examens from "./pages/dashboard/examens/Examens";
import Home from "./pages/dashboard/home/Home";
import PatientDetails from "./pages/dashboard/patients/PatientDetails";
import Patients from "./pages/dashboard/patients/Patients";
import Personnel from "./pages/dashboard/personnel/Personnel";
import Rapport from "./pages/dashboard/rapport/Rapport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: RouteNames.ACCUEIL,
        element: <Home />,
      },
      {
        path: RouteNames.PATIENT,
        element: <Patients />,
        children: [
          { path: RouteNames.PATIENT_DETAILS, element: <PatientDetails /> },
        ],
      },
      {
        path: RouteNames.EXAMENS,
        element: <Examens />,
      },
      {
        path: RouteNames.PERSONNEL,
        element: <Personnel />,
      },
      {
        path: RouteNames.RAPPORT,
        element: <Rapport />,
      },
    ],
  },
]);
