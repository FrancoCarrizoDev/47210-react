import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./compontents/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (products.length === 0) {
    return <h1>No hay productos</h1>;
  }

  return (
    <>
      <h1>HOLA MUNDO</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </>
  );
}

export default App;
