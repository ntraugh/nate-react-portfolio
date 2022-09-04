import project3 from "../images/youtube.PNG"
import project2 from "../images/bou.PNG"
import project1 from "../images/crypto.PNG"


export const Projects = [
    {
      title: "Bouquet Now",
      text:
        "An E-Commerce store for all your boutique needs. Users must login in order to checkout.",
      image: project2,
      website: "https://bouquetnow.herokuapp.com/",
      repo: "https://github.com/ntraugh/flower-shop"
    },
    {
        title: "NateTube",
        text:
          "A YouTube clone that uses YouTube v3 API to receive users videos. Single video pages produce recommended videos. Search by channel as well.",
        image: project3,
        website: "https://natetube.netlify.app/",
        repo: "https://github.com/ntraugh/array-practice/tree/main/youtube"
      },
      {
        title: "Crypto World",
        text:
          "A crypto site that utilizes RapidApi calls to CoinDesk to recieve up to date information about all cryptos. Users can view news about any crypto.",
        image: project1,
        website: "https://cryptoworldtraugh.netlify.app",
        repo: "https://github.com/ntraugh/array-practice/tree/main/cryptoapp"
      }
    
]

