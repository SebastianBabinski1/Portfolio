import { FunctionComponent, useContext } from "react";
import { ISkill } from "../../utils/types";
import styles from "./Bar.module.scss";
import utilsStyles from "../../styles/utils.module.scss";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const darkTheme = useContext(ThemeContext);

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      className={`${styles.barWrapper} ${
        darkTheme ? utilsStyles.dark200 : utilsStyles.light200
      }`}
    >
      <motion.div
        className={styles.content}
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
