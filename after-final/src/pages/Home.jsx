import { Wrap, WrapItem } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import useItems from "../hooks/useItems";
import { useContext } from "react";
import CartContext from "../context/cart.context";

const Home = () => {
  const { items, isLoading } = useItems();
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Wrap spacing="30px">
      {items.map((item) => (
        <WrapItem key={item.id}>
          <ProductCard item={item} handleClick={addItem} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Home;
