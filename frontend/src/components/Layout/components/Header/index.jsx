import { BookOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <BookOutlined  style={{ fontSize: 24, marginRight: 8 }} />
        <span>ExampleBooking</span>
      </div>
    </header>
  );
};

export default Header;
