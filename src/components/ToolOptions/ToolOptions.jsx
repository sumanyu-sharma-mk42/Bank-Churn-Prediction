import React from 'react';
import { useNavigate } from 'react-router-dom';

function ToolOptions() {
    const navigate = useNavigate();
    const handlecust = () => navigate("/customer");
    const handlefile = () => navigate("/upload");

    return (
        <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Choose Your Churn Prediction Method
            </h1>
            <div className="flex space-x-12 mb-8 mt-10">
                {/* Customer Prediction Option */}
                <div className="w-full max-w-xs">
                    <button
                        className="px-8 py-4 hover:cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
                        onClick={handlecust}
                    >
                        <p className="text-xl font-semibold">Predict Churn for a Customer</p>
                        <p className="mt-10 text-sm text-center text-gray-300">Provide the details of a customer to instantly predict whether they are likely to churn or not. This method is ideal for real-time predictions for individual customers.</p>
                    </button>
                </div>


                {/* File Prediction Option */}
                <div className="w-full max-w-xs">
                    <button
                        className="px-9 hover:cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
                        onClick={handlefile}
                    >
                        <p className="text-xl font-semibold">Predict Churn for a File</p>
                        <p className="mt-10 text-sm text-center text-gray-300">Upload a CSV or Excel file containing multiple customer details to predict churn for multiple customers in one go. This option is great for batch analysis and large datasets.</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ToolOptions;
