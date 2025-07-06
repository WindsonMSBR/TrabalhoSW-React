import brigadeiroImg from '../assets/brigadeiro.png'
import goiabadaImg from '../assets/goiabada.png'
import palhaItalianaImg from '../assets/palha-italiana.png'
import alfajorImg from '../assets/alfajor.png'

const candies = [
    {
        id: 0,
        name: "Brigadeiro",
        description: "Doce tradicional brasileiro feito com leite condensado, chocolate em pó e manteiga",
        imgSource: brigadeiroImg,
        price: '1,50'
    },
    {
        id: 1,
        name: "Goiabada",
        description: "Doce de goiaba cortado em fatias, perfeito para combinar com queijo",
        imgSource: goiabadaImg,
        price: '2,00'
    },
    {
        id: 2,
        name: "Alfajor",
        description: "Biscoito recheado com doce de leite e coberto com chocolate",
        imgSource: alfajorImg,
        price: '3,50'

    },
    {
        id: 3,
        name: "Palha italiana",
        description: "Doce feito com brigadeiro e biscoito tipo maisena, enrolado em formato de palha",
        imgSource: palhaItalianaImg,
        price: '2,50'
    }
]

export default candies;