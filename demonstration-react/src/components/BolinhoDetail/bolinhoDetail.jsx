//Rota dinãmica
import { useParams, useNavigate } from "react-router-dom";
import Amendoim from "../Amendoim.jpg";
import Chocolate from "../Chocolate.jpg";
import Chantilly from "../Chantilly.jpg";

const bolinhos = [
    { id: 1, title: "Bolinho de chantilly", poster: Chantilly },
    { id: 2, title: "Bolinho de chocolate", poster: Chocolate },
    { id: 3, title: "Bolinho de amendoim", poster: Amendoim },
];

export default function BolinhoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const bolinho = bolinhos.find(b => b.id === Number(id));

    if (!bolinho) return <p>Bolinho não encontrado.</p>;

    return (
        <div>
            <h3>{bolinho.title}</h3>
            <img src={bolinho.poster} alt={bolinho.title} style={{ width: 200, height: 200, objectFit: "cover" }} />
            <br />
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}