import project3 from "../images/trailblaze.PNG"
import project2 from "../images/FlowerShopHome.png"
import project1 from "../images/newweather.PNG"


export const Projects = [
    {
      title: "Boutique Now",
      text:
        "An E-Commerce store for all your boutique needs. Users must login in order to checkout.",
      image: project2,
      website: "https://bouquetnow.herokuapp.com/",
      repo: "https://github.com/ntraugh/flower-shop"
    },
    {
        title: "Maps || The Fingerprint of the Past",
        text:
          "Maps are scattered all over the internet. With this app you can compare and contrast centruries worth of data.  Using OpenWeather API, Leaflet.js, and LOC API allows you to search for any city in the world.",
        image: project3,
        website: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
        repo: "https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past"
      },
      {
        title: "Trailblazers",
        text:
          "Using Sequelize, MYSQL, handlebars.js, OAUTH, this app allows the user to search for a state and an activity and they will get parks in return. Users must login to see the favorite feature.",
        image: project1,
        website: "https://intense-fjord-45584.herokuapp.com/",
        repo: "https://github.com/mycancel/trailblazers"
      }
    
]

