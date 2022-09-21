import { FunctionComponent } from "react";
import { IService } from "../../utils/types";
import styles from "./ServiceCard.module.scss";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className={styles.serviceCardWrapper}>
      <Icon className={styles.icon} />
      <div>
        <p className={styles.title}>{title}</p>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
