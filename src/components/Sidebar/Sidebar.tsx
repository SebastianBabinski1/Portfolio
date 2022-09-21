import avatar from "../../assets/avatar.jpg";
import styles from "./Sidebar.module.scss";
import utilsStyles from "../../styles/utils.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import CV from "../../assets/Sebastian Bąbiński - CV.pdf";

interface Props {
  toggleTheme: () => void;
}

const Sidebar = ({ toggleTheme }: Props) => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div>
      <img className={styles.avatar} src={avatar} alt="avatar"></img>
      <p className={styles.name}>
        <span className={styles.firstName}>Sebastian</span> Bąbiński
      </p>
      <p
        className={`${darkTheme ? utilsStyles.dark700 : utilsStyles.light200} ${
          styles.position
        } `}
      >
        Web Developer
      </p>
      <a
        href={CV}
        className={`${styles.download} ${
          darkTheme ? utilsStyles.dark700 : utilsStyles.light200
        }`}
        download
      >
        <GiTie
          className={`${styles.icon} ${
            darkTheme ? utilsStyles.dark700 : utilsStyles.light200
          }`}
        />
        Download CV
      </a>

      <div className={styles.socialsWrapper}>
        <a className={styles.socialIcon} href="tel:533 161 541">
          <AiFillPhone className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIcon}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SebastianBabinski1"
        >
          <AiFillGithub className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIcon}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sebastian-babinski/"
        >
          <AiFillLinkedin className={styles.socialIcon} />
        </a>
      </div>

      <div
        className={`${styles.addressWrapper} ${
          darkTheme ? utilsStyles.dark700 : utilsStyles.light200
        }`}
      >
        <div className={styles.addressLocationWrapper}>
          <GoLocation className={styles.icon} />
          <span>Gdańsk, Poland</span>
        </div>
        <p className={styles.contact}>sebastian.babinski1@gmail.com</p>
        <p className={styles.contact}>+48 533 161 541</p>
      </div>

      <button
        className={styles.button}
        onClick={() => {
          window.open("mailto: sebastian.babinski1@gmail.com");
        }}
      >
        Email me
      </button>
      <button onClick={() => toggleTheme()} className={styles.button}>
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
