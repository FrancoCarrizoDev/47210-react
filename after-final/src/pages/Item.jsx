import { useParams } from "react-router-dom";
import useItemById from "../hooks/useItemById";
import { Flex, Heading } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Item() {
  const params = useParams();
  const { item, isLoading } = useItemById(params.itemId);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!item) return <div>No hay productos con la id: {params.itemId}</div>;

  return (
    <Flex flexDir={"column"}>
      <Heading>Producto</Heading>
      <ProductCard item={item} handleClick={addItem} />
    </Flex>
  );
}

export default Item;
