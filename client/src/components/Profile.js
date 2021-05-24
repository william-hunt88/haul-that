import React from "react";
import { Card , Button } from "antd";

function Profile() {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <div className="site-card-border-less-wrapper">
    <Card title="-Booking 1-" bordered={false} style={{ width: 300 }}>
      <p>Category</p>
      <p>Date</p>
      <p>Distance</p>
      <p>Price</p>
      <Button type="primary">Accept Job</Button>
    </Card>
    <Card title="-Booking 2-" bordered={false} style={{ width: 300 }}>
    <p>Category</p>
      <p>Date</p>
      <p>Distance</p>
      <p>Price</p>
      <Button type="primary">Accept Job</Button>
    </Card>
    <Card title="-Booking 3-" bordered={false} style={{ width: 300 }}>
    <p>Category</p>
      <p>Date</p>
      <p>Distance</p>
      <p>Price</p>
      <Button type="primary">Accept Job</Button>
    </Card>
    <Card title="-Booking 4-" bordered={false} style={{ width: 300 }}>
    <p>Category</p>
      <p>Date</p>
      <p>Distance</p>
      <p>Price</p>
      <Button type="primary">Accept Job</Button>
    </Card>
  </div>
  );
}

export default Profile;
