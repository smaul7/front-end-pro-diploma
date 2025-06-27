import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Card, Rate, Typography, Button, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import placeholderImg from "../../assets/hotelPlaceHolder.jpg";
import { fetchHotels } from "../../store/thunks/hotelThunk";

const { Text } = Typography;
const ITEMS_PER_PAGE = 9;

const Hotels = () => {
  const dispatch = useDispatch();
  const { items: hotels, loading, error } = useSelector((state) => state.hotels);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      </div>
    );
  }

  if (error) {
    return <div style={{ color: "red", flex: 1 }}>{error}</div>;
  }

  if (hotels.length === 0) {
    return <div style={{ flex: 1 }}>Готелі не знайдені</div>;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHotels = hotels.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        maxWidth: 1224,
        margin: "0 auto",
        padding: "24px 20px",
        overflow: "auto",
      }}
    >
      <List
        style={{ flex: 1 }}
        grid={{ gutter: 16, column: 3 }}
        dataSource={currentHotels}
        renderItem={(hotel) => (
          <List.Item key={hotel.id}>
            <Card
              hoverable
              size="small"
              style={{ padding: 8, fontSize: 12 }}
              cover={
                <img
                  alt={hotel.name}
                  src={hotel.imageUrl || placeholderImg}
                  style={{ height: 90, objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = placeholderImg;
                  }}
                />
              }
            >
              <Card.Meta
                title={<span style={{ fontSize: 13 }}>{hotel.name}</span>}
                description={
                  <>
                    <Text strong style={{ fontSize: 12 }}>
                      {hotel.city}
                    </Text>
                    <br />
                    <Text style={{ fontSize: 11 }}>{hotel.address}</Text>
                    <br />
                    <Rate disabled allowHalf defaultValue={hotel.hotel_rating} style={{ fontSize: 12 }} />
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />

      <Space
        style={{
          marginTop: 20,
          justifyContent: "center",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <Button onClick={onPrevPage} disabled={currentPage === 1}>
          Попередня
        </Button>
        <Text>
          Сторінка {currentPage} з {totalPages}
        </Text>
        <Button onClick={onNextPage} disabled={currentPage === totalPages}>
          Наступна
        </Button>
      </Space>
    </div>
  );
};

export default Hotels;
