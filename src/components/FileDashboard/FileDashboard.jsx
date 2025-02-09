import React, { useEffect, useState } from "react";
import { useInfocontext } from "../../contexts/InfoContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#38a169", "#e53e3e"]; // Green for Not Churned, Red for Churned

function FileDashboard() {
  const { filepred } = useInfocontext();
  const [filepreddata, setFilePredData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function onSubmit(data) {
    const response = await fetch("http://127.0.0.1:5000/predictfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const d = await response.json();
    setFilePredData(d);
    setLoading(false);
  }

  useEffect(() => {
    let content = [];
    for (let i = 1; i < filepred.length - 1; i++) {
      let str = filepred[i];
      let arr = str.split(",");
      let lastElement = arr[arr.length - 1].slice(0, arr[arr.length - 1].length - 1);
      arr[arr.length - 1] = lastElement;
      content.push(arr);
    }
    onSubmit(content);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
          <p className="text-white mt-4 text-lg">Processing data...</p>
        </div>
      </div>
    );
  }

  const data = [
    { name: "Not Churned", value: filepreddata.total - filepreddata.churned },
    { name: "Churned", value: filepreddata.churned },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-xl w-11/12 mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center mb-6">Churn Prediction Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
          <p className="text-gray-400 text-lg">Total Records Processed</p>
          <p className="text-3xl font-bold text-blue-400">{filepreddata.total}</p>
        </div>
        <div className="flex justify-center">
          <PieChart width={350} height={350}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-green-700 p-6 rounded-lg shadow text-center">
          <p className="text-gray-200 text-lg">Not Churned</p>
          <p className="text-3xl font-bold">{data[0].value} ({(100 - filepreddata.percentage).toFixed(2)}%)</p>
        </div>
        <div className="bg-red-700 p-6 rounded-lg shadow text-center">
          <p className="text-gray-200 text-lg">Churned</p>
          <p className="text-3xl font-bold">{data[1].value} ({filepreddata.percentage.toFixed(2)}%)</p>
        </div>
      </div>
    </div>
  );
}

export default FileDashboard;
