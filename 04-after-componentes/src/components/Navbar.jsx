import Brand from "./Brand";
import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";
import CartContainer from "./CartContainer";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Brand />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CategoryItem isActive={true} name="Ofertas" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Hombre" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Women" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Niños" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Accesorios" />
            </li>
          </ul>
          <CartContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
