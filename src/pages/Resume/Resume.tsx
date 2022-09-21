import Bar from "../../components/Bar/Bar";
import { languages, tools } from "../../utils/data";
import styles from "./Resume.module.scss";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../../utils/animations";

const Resume = () => {
  return (
    <motion.div
      className={styles.resumeWrapper}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <div className={styles.educationAndSkillsWrapper}>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <p className={styles.sectionTitle}>Education</p>
          <div>
            <p className={styles.header}>Geodesy and Cartography</p>
            <p className={styles.description}>Specialization: Geoinformatics</p>
            <p className={styles.details}>
              Gdańsk University of Technology (2017-2022)
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <p className={styles.sectionTitle}>Experience</p>
          <div>
            <p className={styles.header}>Geodesist</p>
            <p className={styles.description}>
              Usługi Geodezyjne Marcin Świąder (2021 - today)
            </p>
            <p className={styles.details}>
              Construction service, preparation of technical documentation.
            </p>
          </div>
        </motion.div>
      </div>
      <div className={styles.bottomBar}>
        <div>
          <p className={styles.languagesTitle}>Languages & Frameworks</p>

          <div>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <p className={styles.toolsTitle}>Tools & Softwares</p>
          <div className={styles.barsWrapper}>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
