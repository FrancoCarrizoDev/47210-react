import { useContext } from "react";
import CartContext from "../context/cart.context";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartSummaryTable from "../components/CartSummaryTable";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.items.length === 0) return <Text>El carrito está vacío</Text>;

  return (
    <Flex flexDir={"column"}>
      <Heading>Resumen del carrito</Heading>
      <CartSummaryTable cart={cart} />
      <Button onClick={() => navigate("/checkout")}>Finalizar Compra</Button>
    </Flex>
  );
}

export default Cart;
