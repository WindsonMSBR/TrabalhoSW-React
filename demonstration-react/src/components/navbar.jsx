//Navegação com link
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ marginBottom: 20 }}>
            <Link to="/" style={{ marginRight: 10 }}>Home</Link>
            <Link to="/bolinhos">Bolinhos</Link>
        </nav>
    );
}