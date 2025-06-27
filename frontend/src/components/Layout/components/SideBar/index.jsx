import React from "react";
import { Menu } from "antd";
import {
  InfoCircleOutlined,
  HomeOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import kabutopsImage from "../../../../assets/Kabutops-Pokemon-PNG-HD-Images.png";


const SideBar = () => {
  const location = useLocation();

  return (
    <div className={styles.sideBar}>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        className={styles.menuCustom}
      >
        <Menu.Item key="/about-us" icon={<InfoCircleOutlined />}>
          <Link to="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="/hotels" icon={<HomeOutlined />}>
          <Link to="/hotels">Hotel</Link>
        </Menu.Item>
        <Menu.Item key="/travel" icon={<CompassOutlined />}>
          <Link to="/travel">Travel</Link>
        </Menu.Item>
      </Menu>

      <img
        className="styles.imageWrapper"
        src={kabutopsImage}
        alt="Kabutops"
        style={{ width: "100%", marginTop: "20px" }}
      />
    </div>
  );
};

export default SideBar;
