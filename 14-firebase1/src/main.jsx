import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import CartProvider from "./context/cart.provider.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const firebaseConfig = {
  apiKey: "AIzaSyA1tLfJWD-lZeRis1X1ZH-4LZZmPmoRc-Y",
  authDomain: "react-app-aa08e.firebaseapp.com",
  projectId: "react-app-aa08e",
  storageBucket: "react-app-aa08e.appspot.com",
  messagingSenderId: "435174354176",
  appId: "1:435174354176:web:c47099424d40e4fca397e5",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
