import { IButtonData } from "../interfaces/general";
import fourwayIMG from "../../../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg";
import workhorstIMG from "../../public/workhorst.jpg";
import single from "../../public/singleMuro.jpg";

export const BUTTONS_DATA: IButtonData[] = [
  {
    title: "Fourway",
    description:
      "Creamos un outfit contando una historia, teniendo encuenta qué prendas mostramos y los colores que utilizamos. Principalmente se colocaran dos partes de arriba (chaqueta, sudadera, camiseta) y dos de abajo (pantalon corto o largo), teniendo en cuenta en que temporada nos encontramos. Si colocamos un pantalon corto deberemos poner un face-out debajo.",
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
    title: "MannequinSt",
    description:
      "Punto estrategico en la tienda ya que el cliente busca outfits fijandose en los manis, los SKUs deben estar proximos a ellos. ",
    image: "/../public/singleMuro2.jpg",
    position: { top: 340, left: 360 },
    class: "buttonClassMannequin",
  },
];
