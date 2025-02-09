import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center p-8">
      {/* Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3_UqrJNYZMffO6emv_BCGWL7udkqcV01HQ&s"
        alt="Banking Illustration"
        className="w-96 h-auto rounded-lg shadow-2xl mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
        Bank Churn Prediction
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 mb-8 px-4 sm:px-8 max-w-2xl">
        Predict whether a customer is likely to leave the bank based on their financial activity. 
        By analyzing key customer data, we can help banks reduce churn and improve customer retention strategies.
      </p>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-800 p-6 rounded-lg shadow-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">86.8% Accuracy</h2>
          <p>Our model provides reliable predictions with high accuracy, ensuring that your bank can act on time.</p>
        </div>
        <div className="bg-indigo-800 p-6 rounded-lg shadow-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">Real-Time Insights</h2>
          <p>Get real-time insights into customer behavior and act swiftly to prevent churn.</p>
        </div>
        <div className="bg-indigo-800 p-6 rounded-lg shadow-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">Tailored Predictions</h2>
          <p>Each prediction is customized based on your bank's unique customer base and data.</p>
        </div>
      </div>

      {/* Action Button */}
      <button
      onClick={() => navigate("/tool")}
      className="px-8 py-4 bg-gradient-to-r hover:cursor-pointer from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
    >
      Start Predicting
    </button>
    </div>
  );
}

export default Home;
