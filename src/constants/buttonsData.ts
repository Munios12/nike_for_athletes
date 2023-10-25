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
      "En este mueble trabajaremos el high capacity (cuando tenemos mucho producto) y el low capacity (tenemos poco producto). En el primer escenario colocaremos una D-Bar para colocar 2 SKUs (dos modelos), en el caso que no tenemos producto ponemos un Face-Out (el pincho donde se encuentra la camiseta azul), donde solo cabe un SKU.",
    image: "/../public/workhorst3.jpg",
    position: { top: 400, left: 520 },
    class: "buttonClassWH",
  },
  {
    title: "Single",
    description:
      "Suelen estar cerca de los mannequins. Si colocamos 4 SKUs pondremos un maximo de 15 units, si colocamos 5 SKUs pondremos un maximo de 10 units",
    image: "/../public/singleMuro2.jpg",
    position: { top: 270, left: 240 },
    class: "buttonClassSing",
  },
  {
    title: "MannequinSt",
    description:
      "Punto estrategico en la tienda ya que el cliente busca outfits fijandose en los manis, los SKUs deben estar proximos a ellos. Los cambiamos durante las aperturas representando SKUs implantados. Utilizamos complementos de equipment (EQ) para hacer los outfits mas realistas. A poder ser utilizamos prendas de temporada y seguimos con el colorflow de la tienda. ",
    image: "/../public/singleMuro2.jpg",
    position: { top: 340, left: 360 },
    class: "buttonClassMannequin",
  },
  {
    title: "Rounder",
    description:
      "Principal foco de clientes porque siempre tiene promo. Cuando nos quedan pocas unidades de un producto (menos de 10u) y no podemos representar un tallaje, revisaremos si ese producto vuelve. Si no vuelve lo pasamos a promote y despues de 24h, saltará con la promo y lo podremos sacar al rounder. ÚLTIMAS TALLAS!",
    image: "",
    position: { top: 260, left: 630 },
    class: "buttonClassRounder",
  },
];
