import React from "react";
import { Card, Tabs } from "antd";
import { useSelector } from "react-redux";
import PublisherTable from "./PublisherTable";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const { TabPane } = Tabs;
const Charts = () => {
  const tableData = useSelector((state) => state.table.data);
  const pieData = useSelector((state) => state.pieChart.data);
  const barData = useSelector((state) => state.barChart.data);
  return (
    <>
      {tableData && pieData && barData && (
        <Card>
          <h1>Dashboard</h1>
          <Tabs defaultActiveKey="1" type="card" size={"large"}>
            <TabPane tab="Table" key="1">
              <PublisherTable data={tableData} />
            </TabPane>
            <TabPane tab="Bar Chart" key="2">
              <BarChart data={barData} />
            </TabPane>
            <TabPane tab="Pie Chart" key="3">
              <PieChart data={pieData} />
            </TabPane>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default Charts;
