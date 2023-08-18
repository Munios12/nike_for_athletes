import { IButtonData } from "../interfaces/general";
import fourwayIMG from "../../../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg";
import workhorstIMG from "../../public/workhorst.jpg";
import single from "../../public/singleMuro.jpg";

export const BUTTONS_DATA: IButtonData[] = [
  {
    title: "Fourway",
    description:
      "Tiene forma de cruz y podemos representar diferentes outfits tanto camisetas con pantalones como tops deportivos y shorts en el caso de WMNS",
    image: "/../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg",
    position: { top: 230, left: 520 },
    class: "buttonClassFW",
  },
  {
    title: "Workhorst",
    description: "outfit 1 del Workhorst",
    image: "/../public/workhorst.jpg",
    position: { top: 50, left: 100 },
    class: "buttonClassWH",
  },
  {
    title: "Single",
    description: "Outfit 2 del Single",
    image: "/../public/singleMuro2.jpg",
    position: { top: 20, left: 20 },
    class: "buttonClassSing",
  },
];
