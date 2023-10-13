import { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  and,
  addDoc,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import "./App.css";
import CartContext from "./context/cart.context";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);

  const { addItem, getTotal, cart, clear } = useContext(CartContext);

  const toast = useToast();

  // useEffect(() => {
  //   const db = getFirestore();

  //   const itemRef = doc(db, "items", "cW86qiMqrwxkx8FnRf9H");
  //   getDoc(itemRef)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setItems([
  //           {
  //             id: snapshot.id,
  //             ...snapshot.data(),
  //           },
  //         ]);
  //       } else {
  //         console.log("No existe el documento");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const db = getFirestore();

  //   const itemsColecction = collection(db, "items");
  //   getDocs(itemsColecction).then((snapshot) => {
  //     if (!snapshot.empty) {
  //       setItems(
  //         snapshot.docs.map((doc) => {
  //           return {
  //             id: doc.id,
  //             ...doc.data(),
  //           };
  //         })
  //       );
  //     }
  //   });
  // }, []);

  const sendOrder = () => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, {
      ...cart,
      date: new Date(),
    }).then(({ id }) => {
      toast({
        title: "Orden enviada",
        description: `El id de la orden es: ${id}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };

  const updateOrder = () => {
    const db = getFirestore();

    const orderDoc = doc(db, "orders", "fOy3JMC2Rs9oOGzQQljl");
    updateDoc(orderDoc, { total: 1000 }).then(() => {
      console.log("Documento actualizado");
    });
  };

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      and(where("price", ">", 10), where("stock", "==", 20))
    );

    // limit(1)

    getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        setItems(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    });
  }, []);

  const batchUpdate = () => {
    const db = getFirestore();

    const batch = writeBatch(db);

    const doc1 = doc(db, "orders", "bFry7LY5VGME50f4HbMM");
    const doc2 = doc(db, "orders", "fOy3JMC2Rs9oOGzQQljl");
    const doc3 = doc(db, "orders", "ksrK6KUypWHxXQolfhbq");

    batch.update(doc1, { total: 1000 });
    batch.update(doc2, { total: 1000 });
    batch.set(doc3, { total: 1000 });

    batch.commit().then(() => {
      console.log("Batch actualizado");
    });
  };

  const createManyOrdersInBatch = () => {
    const db = getFirestore();

    const batch = writeBatch(db);

    const orderCollection = collection(db, "orders");

    const orders = [
      {
        buyer: {
          name: "Mery Doe",
          phone: "123456789",
          email: "",
        },
        items: [],
        total: 0,
      },
      {
        buyer: {
          name: "Naty Doe",
          phone: "123456789",
          email: "",
        },
        items: [],
        total: 0,
      },
    ];

    orders.forEach((order) => {
      const newDoc = doc(orderCollection);
      console.log({ newDoc });
      batch.set(newDoc, order);
    });

    console.log({ batch });
    batch.commit().then(() => {
      // console.log(snapshot);
    });
  };

  return (
    <>
      <Heading mb="5">Productos</Heading>
      <Flex gap={2}>
        {items.map((item) => (
          <Card maxW="sm" key={item.id}>
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
                  onClick={() => addItem(item, 1)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>

      <Box mt="3">
        <code>{JSON.stringify(cart)}</code>
        <p>Total : {getTotal()}</p>
        <ButtonGroup>
          <Button onClick={() => sendOrder()}>Comprar</Button>
          <Button onClick={() => updateOrder()}>
            Actualizar total de compra a $1000
          </Button>
          <Button onClick={() => clear()}>Limpiar Carrito</Button>
          <Button onClick={() => batchUpdate()}>BATCH</Button>
          <Button onClick={() => createManyOrdersInBatch()}>
            CREATE BATCH
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default App;
