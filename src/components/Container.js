import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import Charts from "./charts";
import DateRangePicker from "./DateRangePicker";

const Container = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dateRange = useSelector((state) => state.dateRange.data);

  return (
    <div>
      <Card>
        <br />
        <br />
        {!isLoggedIn && <Banner />}
        {isLoggedIn && dateRange && <DateRangePicker dateRange={dateRange} />}
        <br />
        <br />
        <Charts />
      </Card>
    </div>
  );
};

export default Container;
