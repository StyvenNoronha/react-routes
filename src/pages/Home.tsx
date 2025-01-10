import { useNavigate } from "react-router"

export function Home(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>Página Home</h1>
            <nav>
                <a href="/product">Produtos</a>
                <a href="/product?category=tvs">Categoria</a>

                <button type="button" onClick={() => navigate("/product")}>Ver Produtos</button>
            </nav>
        </div>
    )
}