import React from "react";
import { Typography, Button, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const AboutUs = () => {
  return (
        <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <Typography>
        <Title level={2}>Про компанію ExampleBooking</Title>
        <Paragraph>
          ExampleBooking — це сучасний сервіс для швидкого пошуку та бронювання готелів по всьому світу.
          Ми прагнемо зробити подорожі простими, зручними та доступними для кожного.
        </Paragraph>

        <Paragraph>
          Наша команда складається з досвідчених розробників, дизайнерів і менеджерів, які люблять подорожувати і створювати продукти, що допомагають людям відкривати нові місця.
        </Paragraph>

        <Paragraph>
          Зв'язатися з нами можна через LinkedIn, GitHub або електронну пошту:
        </Paragraph>

        <Space size="middle">
          <Button
            type="primary"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/company/examplebooking"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            icon={<GithubOutlined />}
            href="https://github.com/examplebooking"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            icon={<MailOutlined />}
            href="mailto:contact@examplebooking.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Button>
        </Space>

        <Paragraph style={{ marginTop: 40, fontStyle: "italic" }}>
          ExampleBooking — ваш надійний помічник у світі подорожей.
        </Paragraph>
      </Typography>
    </div>
    </div>
  );
};

export default AboutUs;
