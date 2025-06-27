import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Button, List, Card, Rate, Typography, Space, message } from "antd";
import placeholderImg from "../../assets/hotelPlaceHolder.jpg";
import { fetchDestinations } from "../../store/thunks/destinationsThunk";
import { fetchHotelsByDestination } from "../../store/thunks/hotelThunk";

const { Option } = Select;
const { Text } = Typography;

const ITEMS_PER_PAGE = 9;

const Travel = () => {
  const dispatch = useDispatch();

  const destinations = useSelector((state) => state.destinations.items);
  const loadingDestinations = useSelector((state) => state.destinations.loading);

  const hotels = useSelector((state) => state.hotels.items);
  const loadingHotels = useSelector((state) => state.hotels.loading);
  const errorHotels = useSelector((state) => state.hotels.error);

  const [selectedDestinationId, setSelectedDestinationId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const onSearch = () => {
    if (!selectedDestinationId) {
      message.warning("Будь ласка, оберіть локацію");
      return;
    }
    dispatch(fetchHotelsByDestination(selectedDestinationId)).then(() => {
      setCurrentPage(1);
    });
  };

  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHotels = hotels.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <Space style={{ marginBottom: 20 }} wrap>
        <Select
          placeholder="Оберіть локацію"
          loading={loadingDestinations}
          style={{ width: 250 }}
          onChange={(value) => setSelectedDestinationId(value)}
          value={selectedDestinationId}
          allowClear
        >
          {destinations.map(({ id, label }) => (
            <Option key={id} value={id}>
              {label}
            </Option>
          ))}
        </Select>

        <Button type="primary" onClick={onSearch} loading={loadingHotels}>
          Пошук
        </Button>
      </Space>

      {loadingHotels && <p>Завантаження готелів...</p>}
      {!loadingHotels && errorHotels && <p style={{ color: "red" }}>{errorHotels}</p>}
      {!loadingHotels && hotels.length === 0 && selectedDestinationId && (
        <p>Готелі не знайдені</p>
      )}

      <List
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
                    <Text strong style={{ fontSize: 12 }}>{hotel.city}</Text>
                    <br />
                    <Text style={{ fontSize: 11 }}>{hotel.address}</Text>
                    <br />
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={hotel.hotel_rating}
                      style={{ fontSize: 12 }}
                    />
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />

      {hotels.length > ITEMS_PER_PAGE && (
        <Space style={{ marginTop: 20, justifyContent: "center", width: "100%" }}>
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
      )}
    </div>
  );
};

export default Travel;
