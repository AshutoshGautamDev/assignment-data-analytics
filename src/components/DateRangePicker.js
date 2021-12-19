import React, { useState } from "react";
import moment from "moment";

import { Button, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { getBarData, getPieData, getTableData } from "../redux/actions";
const { RangePicker } = DatePicker;

const DateRangePicker = ({ dateRange }) => {
  const dispatch = useDispatch();
  const [range, setRange] = useState(dateRange);
  const disabledDate = (current) => {
    return (
      (current && current < moment(parseInt(dateRange.startDate))) ||
      (current && current > moment(parseInt(dateRange.endDate)))
    );
  };

  const onChange = (date) => {
    setRange({
      startDate: String(date[0].valueOf()),
      endDate: String(date[1].valueOf()),
    });
  };

  const fetchAllData = () => {
    dispatch(getTableData(range));
    dispatch(getPieData(range));
    dispatch(getBarData(range));
  };

  return (
    <div>
      <RangePicker onChange={onChange} disabledDate={disabledDate} />
      <Button type="primary" size="middle" onClick={fetchAllData}>
        VIEW DASHBOARD
      </Button>
    </div>
  );
};

export default DateRangePicker;
