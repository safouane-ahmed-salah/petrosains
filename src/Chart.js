import ReactECharts from "echarts-for-react";
import moment from "moment";
import { useEffect, useState } from "react";
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;

export default function ({ jsonData = [] }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!jsonData.length) return null;
    setData(
      jsonData.map((d) => {
        const m = moment(d.date);
        console.log(m.toDate());
        return {
          name: m.toDate().toString(),
          value: [m.format("YYYY/M/D"), d.income]
        };
      })
    );
    // for (var i = 0; i < 1000; i++) {
    //   data.push(randomData());
    // }
    // setInterval(function () {
    //   data.push(randomData());
    //   setData([...data]);
    // }, 1000);
  }, [jsonData]);
  console.log(data);
  function randomData() {
    var lastitem = data[data.length - 1];

    var m = moment(lastitem.name).add(1, "months");
    var val = lastitem.value[1] + Math.random() * 21 - 10;
    return {
      name: now.toDate().toString(),
      value: [m.format("YYYY/M/D"), Math.round(val)]
    };
  }
  // let data = [];

  let options = {
    title: {
      text: "Dynamic Data & Time Axis"
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data
      }
    ]
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
}
