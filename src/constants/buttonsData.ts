import { IButtonData } from "../interfaces/general";
// import fourwayIMG from "../../../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg";
// import workhorstIMG from "../../public/workhorst.jpg";
// import single from "../../public/singleMuro.jpg";

export const BUTTONS_DATA: IButtonData[] = [
  {
    title: "Fourway",
    description:
      "Creamos un outfit teniendo encuenta qué prendas mostramos y los colores que utilizamos. Es importante representar el producto segun varios factores: Si tiene promo (aplicar carteleria correspondiente, podemos utilizar carteleria si solo tiene promo una de las prendas, partes superiores, inferiores, camisetas, etc.), temporada en la que nos encontramos... Por otro lado los 'Standars' nos indican como debemos presentar el producto, lo mas importante seria ocultar la etiqueta por dentro de la prenda y tener en cuenta el número de unidades que caben. ",
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
