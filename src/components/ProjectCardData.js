import project1 from "../images/trailblaze.PNG"
import project2 from "../images/map.PNG"
import project3 from "../images/newweather.PNG"


export const Projects = [
    {
        title: "Maps || The Fingerprint of the Past",
        text:
          "Maps are scattered all over the internet. With this app you can compare and contrast centruries worth of data.  Using OpenWeather API, Leaflet.js, and LOC API allows you to search for any city in the world.",
        image: project2,
        website: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
      },
      {
        title: "Trailblazers",
        text:
          "Using Sequelize, MYSQL, handlebars.js, OAUTH, this app allows the user to search for a state and an activity and they will get parks in return. Users must login to see the favorite feature.",
        image: project1,
        website: "https://intense-fjord-45584.herokuapp.com/",
      },
      {
        title: "Current Weather",
        text:
          "Search for any city in the world and not only be presented with the current weather, but also a background image corresponding to the search. This app mainly uses OpenWeather API for weather and Unsplash for background images. ",
        image: project3,
        website: "https://ntraugh.github.io/Weather-App/",
      },
]

