import React from 'react'
import { useInfocontext } from '../../contexts/InfoContext'
import jsPDF from 'jspdf';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Result() {
  const { userinfo, preidctedinfo } = useInfocontext();

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Customer Dashboard", 20, 20);

    let y = 40;
    const addText = (label, value) => {
      doc.setFontSize(12);
      doc.text(`${label}: ${value}`, 20, y);
      y += 10;
    };

    addText("Credit Score", userinfo["credit_score"]);
    addText("Country", userinfo["country"]);
    addText("Gender", userinfo["gender"]);
    addText("Age", userinfo["age"]);
    addText("Tenure", `${userinfo["tenure"]} years`);
    addText("Balance", `Rs ${userinfo["balance"]}`);
    addText("Products", userinfo["products_number"]);
    addText("Credit Card", userinfo["credit_card"] ? "Yes" : "No");
    addText("Active Member", userinfo["active_member"] ? "Yes" : "No");
    addText("Estimated Salary", `Rs ${userinfo["salary"]}`);
    addText("Churn", preidctedinfo["pred"][0] ? "Yes" : "No");
    addText("Churn Percentage", `${(preidctedinfo["prediction"][0][1].toFixed(2) * 100)}%`);

    doc.save("customer_dashboard.pdf");
  };

  // Data for the pie chart
  const churnData = [
    {
      name: 'Churned',
      value: preidctedinfo["pred"][0] ? preidctedinfo["prediction"][0][1] * 100 : 0,
      fill: '#f44336',
    },
    {
      name: 'Not Churned',
      value: preidctedinfo["pred"][0] ? 100 - preidctedinfo["prediction"][0][1] * 100 : 100,
      fill: '#4caf50',
    }
  ];

  return userinfo == null ? (
    ""
  ) : (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Customer Dashboard
        </h2>
        <div className="border-b border-gray-300 pb-2 mb-2">
          <p className="text-lg">
            <strong>Credit Score:</strong> {userinfo["credit_score"]}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Country:</strong> {userinfo["country"]}
          </p>
          <p>
            <strong>Gender:</strong> {userinfo["gender"]}
          </p>
          <p>
            <strong>Age:</strong> {userinfo["age"]}
          </p>
          <p>
            <strong>Tenure:</strong> {userinfo["tenure"]} years
          </p>
          <p>
            <strong>Balance:</strong> ₹ {userinfo["balance"]}
          </p>
          <p>
            <strong>Products:</strong> {userinfo["products_number"]}
          </p>
          <p>
            <strong>Credit Card:</strong> {userinfo["credit_card"] ? "Yes" : "No"}
          </p>
          <p>
            <strong>Active Member:</strong> {userinfo["active_member"] ? "Yes" : "No"}
          </p>
          <p>
            <strong>Estimated Salary:</strong> ₹ {userinfo["salary"]}
          </p>
        </div>
        <div className="mt-4 text-center">
          <p
            className={`text-lg font-semibold ${preidctedinfo["pred"][0] ? "text-red-500" : "text-green-500"}`}
          >
            <strong>Churn: </strong> {preidctedinfo["pred"][0] ? "Yes" : "No"}
          </p>
          <p
            className={`text-lg font-semibold ${preidctedinfo["pred"][0] ? "text-red-500" : "text-green-500"}`}
          >
            <strong>Churn Percentage: </strong> {preidctedinfo["prediction"][0][1] * 100 + "%"}
          </p>
        </div>

        {/* Pie chart */}
        <div className="mt-6 w-full max-w-xs mx-auto">
          <PieChart width={300} height={300}>
            <Pie
              data={churnData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {churnData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Centered Button with Spacing */}
      <button
        onClick={downloadPDF}
        className="px-9 hover:cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
      >
        Download PDF
      </button>
    </div>
  );
}

export default Result;
