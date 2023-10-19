import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ item, handleClick }) => {
  const navigation = useNavigate();
  return (
    <Card maxW="xs">
      <CardBody>
        <Image
          src={item.imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"200px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>{item.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${item.price}
          </Text>
          <Text color="gray.600" fontSize="sm">
            {item.stock} unidades
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => handleClick(item, 1)}
          >
            Agregar al carrito
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => navigation(`/item/${item.id}`)}
          >
            Ver detalle
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
