import { useParams } from "react-router-dom";
import useItemsByCategory from "../hooks/useItemsByCategory";
import { ProductCard } from "../components/ProductCard";
import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Category() {
  const params = useParams();
  const { items, isLoading } = useItemsByCategory(params.categoryName);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (items.length === 0)
    return <div>No hay productos con la catogría: {params.categoryName}</div>;

  return (
    <Flex flexDir={"column"} gap="3">
      <Heading>Productos de categoría: {params.categoryName}</Heading>
      <Wrap spacing={"30px"}>
        {items.map((item) => (
          <WrapItem key={item.id}>
            <ProductCard item={item} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Category;
