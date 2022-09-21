import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { projects as projectsData } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import utilsStyles from "../../styles/utils.module.scss";
import ProjectsNavbar from "./ProjectsNavbar/ProjectsNavbar";
import { Category } from "../../utils/types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../../utils/animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      console.log("it was all");
      return;
    }

    const filteredArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    console.log(filteredArray);
    setProjects(filteredArray);
    setActive(category);
  };

  const darkTheme = useContext(ThemeContext);
  return (
    <motion.div
      className={styles.wrapper}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className={styles.projectsWrapper}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name}
            className={`${
              darkTheme ? utilsStyles.dark700 : utilsStyles.light100
            } ${styles.projectWrapper} `}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
