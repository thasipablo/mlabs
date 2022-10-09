import { RoutNames } from "./RouteNames";
import home from '../icons/home.svg'
import notes from '../icons/notes.svg'
import patients from '../icons/patients.svg'
import personnel from '../icons/personnel.svg'
import shield from '../icons/shield.svg'

export const SidebarMenusData = [
  {
    text: "Accueil",
    icon: `${home}`,
    link: RoutNames.ACCUEIL,
  },
  {
    text: "Patients",
    icon: "icon",
    link: RoutNames.PATIENT,
  },
  {
    text: "Examens",
    icon: "",
    link: RoutNames.EXAMENS,
  },
  {
    text: "Personnel",
    icon: "icon",
    link: RoutNames.PERSONNEL,
  },
  {
    text: "Rapport",
    icon: "icon",
    link: RoutNames.RAPPORT,
  },
];
