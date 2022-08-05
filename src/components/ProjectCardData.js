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
        title: "Trailblazers",
        text:
          "Using Sequelize, MYSQL, handlebars.js, OAUTH, this app allows the user to search for a state and an activity and they will get parks in return. Users must login to see the favorite feature.",
        image: project3,
        website: "https://intense-fjord-45584.herokuapp.com/",
        repo: "https://github.com/mycancel/trailblazers"
      },
      {
        title: "Current Weather",
        text:
          "Search for any city in the world and not only be presented with the current weather for that city, but also a background image that corresponds as well.",
        image: project1,
        website: "https://ntraugh.github.io/Weather-App/",
        repo: "https://github.com/ntraugh/Weather-App"
      }
    
]

