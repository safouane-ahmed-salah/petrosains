import moment from "moment";
import * as xlsx from "xlsx";

export default function ({ setData }) {
  const onUpload = (e) => {
    if (!e.target.files) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const source = e.target.result;
      const workbook = xlsx.read(source, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(worksheet);
      var data = [];
      var years = {};
      for (var row of json) {
        if (row.Income == "Month") {
          for (var k in row) {
            if (k == "Income" || k == "Expenditure") continue;
            var year = row[k];
            if (!years[year]) years[year] = [];
            years[year].push(k);
          }
          continue;
        }
        for (var year in years) {
          var keys = years[year];
          data.push({
            date: row.Income + "-" + year,
            income: row[keys[0]],
            expanditure: row[keys[1]]
          });
        }
      }
      data.sort(function (a, b) {
        return moment(a.date) - moment(b.date);
      });

      setData && setData(data);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={onUpload} />
    </div>
  );
}
