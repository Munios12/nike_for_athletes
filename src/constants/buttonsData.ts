import { IButtonData } from "../interfaces/general";
import fourwayIMG from "../../../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg";
import workhorstIMG from "../../public/workhorst.jpg";
import single from "../../public/singleMuro.jpg";

export const BUTTONS_DATA: IButtonData[] = [
  {
    title: "Fourway",
    description: "Descripción del mueble y de como representar SKUs...",
    image: "/../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg",
    position: { top: 230, left: 520 },
    class: "buttonClassFW",
  },
  {
    title: "Workhorst",
    description:
      "Hablar de producto, dbar, face-out, high capacity, low capacity",
    image: "/../public/workhorst.jpg",
    position: { top: 400, left: 520 },
    class: "buttonClassWH",
  },
  {
    title: "Single",
    description: "Maximo 4 SKUs, hablar del máximo de units por modelo, ",
    image: "/../public/singleMuro2.jpg",
    position: { top: 270, left: 240 },
    class: "buttonClassSing",
  },
  {
    title: "Mannequin Statement",
    description: "Maximo 4 SKUs, hablar del máximo de units por modelo, ",
    image: "/../public/singleMuro2.jpg",
    position: { top: 270, left: 600 },
    class: "buttonClassSing",
  },
];
