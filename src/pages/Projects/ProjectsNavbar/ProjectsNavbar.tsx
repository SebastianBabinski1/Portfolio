import { FunctionComponent } from "react";
import { Category } from "../../../utils/types";
import styles from "./ProjectsNavbar.module.scss";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  return (
    <li
      className={`${styles.navItem} ${active === value && styles.active}`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className={styles.projectsNavbar}>
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="javascript" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="tailwind" {...props} />
      <NavItem value="bootstrap" {...props} />
      <NavItem value="python" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
