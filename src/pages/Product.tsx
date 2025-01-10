import { useSearchParams } from "react-router";

export function Product() {
  const [searchParams] = useSearchParams()

  const category = searchParams.get("category")
  return (
    <div>
      <h1>Pagina de Produto</h1>
      <nav>
        <a href="/">home</a>
        {
          category && (
            <span>
              Categoria <strong>{category}</strong>
            </span>
          )
        }
      </nav>
    </div>
  );
}
