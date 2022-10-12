import { uid } from "uid";
import assorted from "./assets/images/assorted.png"
import assorted2 from "./assets/images/assorted2.png"
import berries from "./assets/images/berries.png"
import citrus from "./assets/images/citrus.png"
import coconuts from "./assets/images/coconuts.png"
import pineapple from "./assets/images/pineapple.png"
import pumpkins from "./assets/images/pumpkins.png"

const products = [
    {id: uid(), name: "Assorted Fruits", price: "$19.99", image: assorted},
    {id: uid(), name: "Assorted Fruits and Berries", price: "$19.99", image: assorted2},
    {id: uid(), name: "Mixed Berries", price: "$19.99", image: berries },
    {id: uid(), name: "Citrus", price: "$19.99", image: citrus },
    {id: uid(), name: "Coconut", price: "$29.99", image: coconuts },
    {id: uid(), name: "Pineapple", price: "$29.99", image: pineapple },
    {id: uid(), name: "Pumpkin", price: "$39.99", image: pumpkins },
  ];

export default products