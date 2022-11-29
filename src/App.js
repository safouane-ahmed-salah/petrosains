import Chart from "./Chart";
import Upload from "./Upload";
import "./styles.css";
import { useState } from "react";
import {Tabs} from "antd";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Upload setData={setData} />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Income" key="1">
        <Chart jsonData={data} title="Income Forcasting" dataKey="income" color="green" />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Expenditure" key="2">
        <Chart jsonData={data} title="Expenditure Forcasting" dataKey="expanditure" color="red" />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
