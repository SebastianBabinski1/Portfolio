import avatar from "../assets/avatar.jpg";
import styles from "./Sidebar.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img className={styles.avatar} src={avatar} alt="avatar"></img>
      <p className={styles.name}>
        <span>Sebastian</span> Bąbiński
      </p>
      <p className={styles.position}>Web Developer</p>
      <a
        href="https://react-icons.github.io/react-icons/search?q=youtube"
        className={styles.download}
        download="name"
      >
        <GiTie className={styles.icon} /> Download resume
      </a>

      <div className={styles.socialsWrapper}>
        <a
          className={styles.socialIcon}
          href="https://react-icons.github.io/react-icons/search?q=youtube"
        >
          <AiFillGithub className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIcon}
          href="https://react-icons.github.io/react-icons/search?q=youtube"
        >
          <AiFillYoutube className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIcon}
          href="https://react-icons.github.io/react-icons/search?q=youtube"
        >
          <AiFillLinkedin className={styles.socialIcon} />
        </a>
      </div>

      <div className={styles.addressWrapper}>
        <div className={styles.addressLocationWrapper}>
          <GoLocation className={styles.icon} />
          <span>Gdańsk, Poland</span>
        </div>
        <p className={styles.contact}>sebastian.babinski1@gmail.com</p>
        <p className={styles.contact}>+48 533 161 541</p>
      </div>

      <button className={styles.button}>Email me</button>
      <button className={styles.button}>Toggle theme </button>
    </div>
  );
};

export default Sidebar;
