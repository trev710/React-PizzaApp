//imported image jpgs for ingredients

//crust
import pizzaCrust from './../images/pizzaCrust.jpg';
import stuffedCrustImage from './../images/stuffedcrust.jpg'

//sauces
import redSauceImage from './../images/redsauce.jpg'
import whiteSauceImage from './../images/whitesauce.jpg'


//cheese
import asiagoImage from './../images/asiago.jpg'
import provoloneImage from './../images/provolone.jpg'
import fetaCheeseImage from './../images/fetaCheese.jpg';
import mozzarellaImage from './../images/mozarella.jpg';
// import swissCheeseImage from './../images/swissCheese.jpg';


//meat
import pepperoniImage from './../images/pepperoni.jpg';
import chickenImage from './../images/chicken.jpg';
import coldCutsImage from './../images/coldCuts.jpg'
import sausageImage from './../images/sausage.jpg';
import beefImage from './../images/beef.jpg';


//veggies
import vegetablesImage from './../images/vegetables.jpg';
import mushroomImage from './../images/mushroom.jpg'
import onionImage from './../images/onion.jpg'
import oliveImage from './../images/olives.jpg'

//oils and spices
import spicesImage from './../images/spices.jpg';


let ingredientsInfo = {
  pepperoni: {
    price: 3,
    image: pepperoniImage,
    display: "Pepperoni",
  },
  ham: {
    price: 3,
    image: coldCutsImage,
    display: "Ham",
  },
  chicken: {
    price: 3,
    image: chickenImage,
    display: "Chicken",
  },
  sausage: {
    price: 3,
    image: sausageImage,
    display: "Sausage",
  },
  beef: {
    price: 3,
    image: beefImage,
    display: "Ground Beef",
  },
  mozzarella: {
    price: 2,
    image: mozzarellaImage,
    display: "Mozzarella",
  },
  provolone: {
    price: 2,
    image: provoloneImage,
    display: "Provolone",
  },
  mixedCheese: {
    price: 2,
    image: asiagoImage,
    display: "Asiago",
  },
  threeCheese: {
    price: 2,
    image: mozzarellaImage,
    display: "3 cheese blend",
  },
  spices: {
    price: 0.25,
    image: spicesImage,
    display: "Italian Seasoning",
  },
  vegetables: {
    price: 2,
    image: vegetablesImage,
    display: "Vegetarian",
  },
    onion: {
      price: 1,
      image: onionImage,
      display: "Onions",
    },
    olives: {
      price: 1,
      image: oliveImage,
      display: "Olives",
    },
};

export const ingredientsInfoStatic = ingredientsInfo;
export const pizzaCrustImage = pizzaCrust;
