import { FunctionComponent, useContext, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../../../utils/types";
import styles from "./ProjectCard.module.scss";
import utilsStyles from "../../../styles/utils.module.scss";
import { ThemeContext } from "../../../App";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../../utils/animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div className={styles.projectCardWrapper}>
      <img
        src={image_path}
        alt={name}
        className={styles.image}
        onClick={() => setShowDetail(id)}
      />
      <p className={styles.name}>{name}</p>

      {showDetail === id && (
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className={`${
            darkTheme ? utilsStyles.dark100 : utilsStyles.lightDefault
          } ${styles.modal} `}
        >
          <div>
            <motion.div variants={fadeInUp}>
              <img
                src={image_path}
                alt={name}
                className={`${styles.image} ${styles.modalImage}`}
              />
            </motion.div>
            <motion.div className={styles.linksWrapper} variants={fadeInUp}>
              <a
                className={`${
                  darkTheme ? utilsStyles.dark700 : utilsStyles.light100
                } ${styles.links} `}
                href={github_url}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                className={`${
                  darkTheme ? utilsStyles.dark700 : utilsStyles.light100
                } ${styles.links} `}
                href={deployed_url}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.p variants={fadeInUp} className={styles.name}>
              {name}
            </motion.p>
            <motion.p variants={fadeInUp} className={styles.description}>
              {description}
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.techsWrapper}>
              {key_techs.map((tech) => (
                <span
                  className={`${
                    darkTheme ? utilsStyles.dark700 : utilsStyles.light100
                  } ${styles.tech} `}
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className={`${
              darkTheme ? utilsStyles.dark700 : utilsStyles.lightDefault
            } ${styles.close} `}
            onClick={() => setShowDetail(null)}
          >
            <span>x</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
