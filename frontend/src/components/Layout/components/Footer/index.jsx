import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <Text type="secondary">© {new Date().getFullYear()} ExampleBooking. Усі права захищено.</Text>
    </AntFooter>
  );
};

export default Footer;
