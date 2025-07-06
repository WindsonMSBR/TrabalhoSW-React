//Rota aninhada
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BolinhoForm from "./BolinhoForm";

export default function BolinhoList() {
  const [bolinhos, setBolinhos] = useState([
    { id: 1, title: "Bolinho de chantilly" },
    { id: 2, title: "Bolinho de chocolate" },
    { id: 3, title: "Bolinho de amendoim" },
  ]);

  function adicionarBolinho({ nome, sabor }) {
    setBolinhos([
      ...bolinhos,
      { id: Date.now(), title: `${nome} (${sabor})` }
    ]);
  }

  return (
    <div>
      <h2>Lista de Bolinhos</h2>
      <BolinhoForm onAdd={adicionarBolinho} />
      <ul>
        {bolinhos.map(bolinho => (
          <li key={bolinho.id}>
            <Link to={`${bolinho.id}`}>{bolinho.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}