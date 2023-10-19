import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function CartSummaryTable({ cart }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th>Precio Unitario</Th>
            <Th>Precio total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.items.map(({ item, quantity }) => (
            <Tr textAlign={"left"} key={item.id}>
              <Td>{item.title}</Td>
              <Td>{quantity}</Td>
              <Td isNumeric>${item.price}</Td>
              <Td isNumeric>${item.price * quantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CartSummaryTable;
