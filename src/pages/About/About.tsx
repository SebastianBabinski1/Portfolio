import styles from "./About.module.scss";
import { services } from "../../utils/data";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import utilsStyles from "../../styles/utils.module.scss";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../../utils/animations";

const About = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <motion.div
      className={styles.aboutWrapper}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <p className={styles.description}>
        Years ago I decided to turn my passion for computer science into
        development of my skills as a React Developer. My favorite programming
        language is JavaScript, but I like to be up-to-date with new and useful
        knowledge.
      </p>
      <div
        className={`${styles.content} ${
          darkTheme ? utilsStyles.dark500 : utilsStyles.lightDefault
        }`}
      >
        <p className={styles.header}>What are my strengths?</p>
        <motion.div
          className={styles.servicesWrapper}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className={`${styles.serviceWrapper} ${
                darkTheme ? utilsStyles.dark300 : utilsStyles.light100
              }`}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
