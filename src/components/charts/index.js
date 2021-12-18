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
          <Tabs defaultActiveKey="1" type="card" size={"large"}>
            <TabPane tab="Tab 1" key="1">
              <PublisherTable data={tableData} />
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <BarChart data={barData} />
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              <PieChart data={pieData} />
            </TabPane>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default Charts;
