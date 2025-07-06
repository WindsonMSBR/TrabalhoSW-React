import { useState } from "react";

export default function BolinhoForm({ onAdd }) {
    const [nome, setNome] = useState("");
    const [sabor, setSabor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (onAdd) {
            onAdd({ nome, sabor });
        }
        setNome("");
        setSabor("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Sabor:
                    <input
                        type="text"
                        value={sabor}
                        onChange={e => setSabor(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Cadastrar Bolinho</button>
        </form>
    );
}