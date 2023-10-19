import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "../components/CartWidget";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div>
      <nav>
        <Box as="ul" display="flex" gap="5" listStyleType={"none"} pb="5">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/gorros">Gorros</Link>
          </li>
          <li>
            <Link to="/category/camisas">Camisas</Link>
          </li>
          <Box marginLeft={"auto"}>
            {location.pathname !== "/cart" && <CartWidget />}
          </Box>
        </Box>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
