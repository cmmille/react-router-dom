import { uid } from "uid";

const products = [
    {id: uid(), name: "Assorted Fruits", price: "$19.99", image: "/images/assorted.png"},
    {id: uid(), name: "Assorted Fruits and Berries", price: "$19.99", image: "/images/assorted2.png"},
    {id: uid(), name: "Mixed Berries", price: "$19.99", image: "/images/berries.png" },
    {id: uid(), name: "Citrus", price: "$19.99", image: "/images/citrus.png" },
    {id: uid(), name: "Coconut", price: "$29.99", image: "/images/coconuts.png" },
    {id: uid(), name: "Pineapple", price: "$29.99", image: "/images/pineapple.png" },
    {id: uid(), name: "Pumpkin", price: "$39.99", image: "/images/pumpkins.png" },
  ];

export default products