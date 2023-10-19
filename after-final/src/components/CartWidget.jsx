import { useContext } from "react";
import CartContext from "../context/cart.context";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Flex gap="5">
      <Flex flexDir={"column"}>
        <span>
          Elementos en el carrito:{" "}
          {cart.items.reduce((acc, curr) => acc + curr.quantity, 0)}
        </span>
        <span>Total: ${cart.total}</span>
      </Flex>

      <Button onClick={() => navigate("/cart")}>Ver carrito</Button>
    </Flex>
  );
};

export default CartWidget;
