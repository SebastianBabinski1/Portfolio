import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";
import styles from "./Navbar.module.scss";
import utilsStyles from "../../styles/utils.module.scss";

interface Props {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}

const NavItem = ({ activeItem, name, route, setActiveItem }: Props) => {
  const darkTheme = useContext(ThemeContext);

  return activeItem !== name ? (
    <Link className={styles.item} to={route}>
      <span
        onClick={() => {
          setActiveItem(name);
        }}
        className={`${styles.itemName} ${
          darkTheme ? utilsStyles.dark500 : utilsStyles.lightDefault
        }`}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("About");

  const location = useLocation();

  const darkTheme = useContext(ThemeContext);

  useEffect(() => {
    if (location.pathname === "/") setActiveItem("About");
    if (location.pathname === "/projects") setActiveItem("Projects");
    if (location.pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className={styles.navbar}>
      <span
        className={`${styles.activeItem} ${
          darkTheme ? utilsStyles.dark500 : utilsStyles.lightDefault
        }`}
      >
        {activeItem}
      </span>
      <div className={styles.itemsWrapper}>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />{" "}
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
