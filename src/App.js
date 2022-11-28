import Chart from "./Chart";
import Upload from "./Upload";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Upload setData={setData} />
      <Chart jsonData={data} />
    </div>
  );
}
