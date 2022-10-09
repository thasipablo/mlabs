import { RouteNames } from "./RouteNames";
import home from '../icons/home.svg'
import notes from '../icons/notes.svg'
import patients from '../icons/patients.svg'
import personnel from '../icons/personnel.svg'
import shield from '../icons/shield.svg'

export const SidebarMenusData = [
  {
    text: "Accueil",
    icon: `${home}`,
    link: RouteNames.ACCUEIL,
  },
  {
    text: "Patients",
    icon: "icon",
    link: RouteNames.PATIENT,
  },
  {
    text: "Examens",
    icon: "",
    link: RouteNames.EXAMENS,
  },
  {
    text: "Personnel",
    icon: "icon",
    link: RouteNames.PERSONNEL,
  },
  {
    text: "Rapport",
    icon: "icon",
    link: RouteNames.RAPPORT,
  },
];
