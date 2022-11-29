import ReactECharts from "echarts-for-react";
import moment from "moment";
import { useEffect, useState } from "react";
import {Table} from "antd";

export default function({ jsonData = [], title = 'Income Forcasting', dataKey = 'income', color="green" }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!jsonData.length) return;
        setData(
            jsonData.map((d) => {
                const m = moment(d.date);
                console.log(m.toDate());
                return {
                    name: m.toDate().toString(),
                    value: [m.format("YYYY/M/D"), d[dataKey]]
                };
            })
        );
    }, [jsonData]);

    useEffect(() => {
        if (!data.length) return;
        var timer = setTimeout(function() {
            data.push(forcastData());
            setData([...data]);
        }, 2000);
        return () => clearTimeout(timer);
    }, [data]);

    function forcastData() {
        var lastitem = data[data.length - 1];
        var m = moment(lastitem.name).add(1, "months");
        var values = data.filter(d => d.name.includes(m.format('MMM'))).map(d=> d.value[1]);
        var totalAll = 0;
        var totalFactor = 0;
        var changeRatioTotal = 0;
        for(var i in values){
            var factor = parseInt(i)+1;
            totalAll += (values[i] * factor);
            totalFactor += factor;
            if(i<values.length-1){
                changeRatioTotal += ((values[i]/values[factor]) * factor);
            }
        }
        var avgMonth = totalAll/totalFactor; 
        var changeRatioAvg = changeRatioTotal/(totalFactor-values.length); 
        //var avgMonth = values.reduce(function(a, b) { return a + b; }, 0)/values.length;
        var avgAll = data.map(d=> d.value[1]).reduce(function(a, b) { return a + b; }, 0)/data.length;
        var ratio = 2;

        // var val = (sum/values.length) * Math.max(Math.random()*2, 1);
        // var val = (avgMonth*ratio*changeRatioAvg + avgAll)/(ratio+1);
        var val = avgMonth*changeRatioAvg;
        return {
            name: m.toDate().toString(),
            value: [m.format("YYYY/M/D"), Math.round(val)]
        };
    }

    let options = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {
            trigger: "axis",
            show: true,
            formatter: function(params) {
                params = params[0];
                var date = moment(params.name);
                return date.format('MMM YYYY') + ": RM" + Number(params.value[1]).toLocaleString();
            },
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
        series: [{
            name: "Amount",
            type: "line",
            showSymbol: false,
            data: data,
            lineStyle: {color}
        }]
    };

    var years = {};
    var dataSource = [];
    var columns = [{title: 'Month', dataIndex: 'month', key: 'month'}];
    for(var d of data){
        var mnt = moment(d.name);
        var y = mnt.format('YYYY');
        var m = mnt.format('MMMM');
        var val = d.value[1];
        if(!years[y]) years[y] = 0;
        years[y] += val;
        if(!columns.filter(c => c.title==y).length) columns.push({title: y, dataIndex: y, key: y});
        var ind = dataSource.findIndex(d => d.month == m);
        var sourceVal = 'RM'+ Number(val).toLocaleString();
        if(ind>-1) dataSource[ind][y] = sourceVal;
        else dataSource.push({month: m, [y]: sourceVal });
    }   

    return (<div style={{padding: 20}}>
        <div style={{display: 'flex', overflow: 'auto', gap: 20, justifyContent: 'center', width: '100%', paddingBottom: 30}}>
            {Object.entries(years).map(([year, total], index)=>{
                return <div key={index} style={{border: '1px solid '+ color, color, padding: 10, borderRadius: 8, width: 200}}>
                    <h4>Total {title} ({year})</h4>
                    <div>RM{Number(total).toLocaleString()}</div>
                </div>
            })}
        </div>
        <ReactECharts option={options} /> 
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    );
}