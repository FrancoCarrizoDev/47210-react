import { useEffect, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Remera ReactJS",
    price: 100,
    stock: 5,
  },
  {
    id: 2,
    name: "Remera Javascript",
    price: 100,
    stock: 3,
  },
];

const response = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});

function App() {
  const [products, setProducts] = useState([]);

  const decrementar = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        // si el id del producto es igual al id que recibo por parametro, le resto 1 al count
        return {
          ...product,
          count: product.count - 1,
        };
      }
      return product;
    });
    setProducts(newProducts); // seteo los products con stock actualizado
  };

  const incrementar = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        // si el id del producto es igual al id que recibo por parametro, le sumo 1 al count
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });
    setProducts(newProducts); // seteo los products con stock actualizado
  };

  useEffect(() => {
    response.then((products) => {
      // cuando la promesa se resuelve, seteo los productos
      setProducts(mapProducts(products));
    });
  }, []);

  const mapProducts = (products) =>
    products.map((product) => ({
      ...product,
      count: 0, // les incializo el count en 0 a cada producto
    }));

  if (products.length === 0) return <p>Cargando...</p>;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            style={{
              backgroundColor:
                product.count >= product.stock ? "tomato" : "black",
              borderRadius: "10px",
              padding: "20px",
            }}
            key={product.id}
          >
            <h4>{product.name}</h4>
            {product.count >= product.stock && <p>Los llevas a todos!</p>}
            <div>
              <button
                disabled={product.count === 0}
                onClick={() => decrementar(product.id)}
              >
                -
              </button>
              <button
                disabled={product.count >= product.stock}
                onClick={() => incrementar(product.id)}
              >
                +
              </button>
            </div>
            <p>Cantidad a llevar: {product.count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
