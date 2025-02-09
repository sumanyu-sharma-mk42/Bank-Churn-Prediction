import React from 'react'

function UserGuide() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-100">📖 User Guide</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200">1️⃣ Introduction</h2>
        <p className="text-gray-400 mt-2">
          The <strong>Churn Prediction Web App</strong> is a web-based application that predicts whether a customer will churn based on various features such as <em>credit score, country, gender, age, balance, and more</em>.
        </p>
      </section>

      {/* Model Accuracy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200">2️⃣ Model Accuracy</h2>
        <p className="text-gray-400 mt-2">
          The churn prediction model integrated into the app is <strong>86.8% accurate</strong>. The app uses a combination of the <strong>Decision Tree Classifier</strong> and the <strong>Random Forest Classifier</strong>. It automatically selects the best-performing model out of the two for each prediction, ensuring the most accurate result.
        </p>
      </section>

      {/* CSV File Format */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200">3️⃣ CSV File Formatting</h2>
        <p className="text-gray-400 mt-2">
          To upload your data, ensure the CSV file follows the structure below. It must contain the following columns:
        </p>
        
        {/* Table for CSV format */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto bg-gray-900 text-gray-400">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2 border">Column Name</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">customer_id</td>
                <td className="px-4 py-2 border">Unique identifier for each customer</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border">credit_score</td>
                <td className="px-4 py-2 border">Credit score of the customer</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">country</td>
                <td className="px-4 py-2 border">Country of the customer (e.g., "France", "Spain")</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border">gender</td>
                <td className="px-4 py-2 border">Gender of the customer (e.g., "Male", "Female")</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">age</td>
                <td className="px-4 py-2 border">Age of the customer</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border">tenure</td>
                <td className="px-4 py-2 border">Number of years the customer has been with the bank</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">balance</td>
                <td className="px-4 py-2 border">Current balance of the customer</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border">products_number</td>
                <td className="px-4 py-2 border">Number of products the customer has with the bank</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">credit_card</td>
                <td className="px-4 py-2 border">Whether the customer has a credit card (1 = Yes, 0 = No)</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border">active_member</td>
                <td className="px-4 py-2 border">Whether the customer is an active member (1 = Yes, 0 = No)</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border">estimated_salary</td>
                <td className="px-4 py-2 border">Estimated salary of the customer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-2">Make sure your CSV file adheres to this format to ensure smooth data processing.</p>
      </section>

      {/* Basic Features */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200">4️⃣ Basic Features of the Web App</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>📂 Upload a CSV file for churn prediction</li>
          <li>📊 Displays churn prediction results with detailed insights</li>
          <li>🎨 Interactive pie chart visualization of churned vs non-churned customers</li>
          <li>💡 Accurate churn prediction based on customer data</li>
          <li>🖥️ Easy-to-use interface</li>
        </ul>
      </section>

      {/* Contact Support */}
      <section>
        <h2 className="text-xl font-semibold text-gray-200">5️⃣ Need Help?</h2>
        <p className="text-gray-400 mt-2">
          If you have any issues or questions, feel free to contact our support team at: <strong>support@example.com</strong>
        </p>
      </section>
    </div>
  )
}

export default UserGuide
