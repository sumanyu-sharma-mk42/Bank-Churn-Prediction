import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useInfocontext } from "../../contexts/InfoContext";

function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  
  const {userinfo ,setuserinfo,preidctedinfo, setprediction} = useInfocontext();
  const navigate = useNavigate();
  const [change,setchange] = useState(false);

  useEffect(()=>{
    if(change && !isSubmitting){
      navigate("/result")
    }
    setchange(isSubmitting);
  },[isSubmitting])

  async function onsubmit(data) {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const d = await response.json();
    console.log("probability of the customer getting churned is " + d.prediction[0][1]);
    console.log("the customer is " + `${d.pred[0]? "churned" :"not churned"}`);
    setuserinfo(data);
    setprediction(d);
  }

  useEffect(()=>{
    console.log(userinfo); // gives an object
    console.log(preidctedinfo); // gives an object of two arrays
  },[userinfo])

  return (
    <div className="bg-gray-900 min-h-screen pt-10">
    <form onSubmit={handleSubmit(onsubmit)} className="max-w-2xl mx-auto bg-gray-300 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">User Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Gender</label>
          <input
            type="text"
            {...register("gender", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.gender && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Credit Score</label>
          <input
            type="number"
            {...register("credit_score", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.credit_score && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Country</label>
          <input
            type="text"
            {...register("country", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.country && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Tenure{" (in years)"}</label>
          <input
            type="number"
            {...register("tenure", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.tenure && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Balance</label>
          <input
            type="number"
            {...register("balance", { required: true })}
            step="0.00001"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.balance && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Products Number</label>
          <input
            type="number"
            {...register("products_number", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.products_number && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Salary</label>
          <input
            type="number"
            step="0.0001"
            {...register("salary", { required: true })}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.salary && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("credit_card", { required: false })}
            className="w-5 h-5 text-blue-500"
          />
          <label className="font-medium text-gray-700">Credit Card</label>
          {errors.credit_card && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("active_member", { required: false })}
            className="w-5 h-5 text-blue-500"
          />
          <label className="font-medium text-gray-700">Active Member</label>
          {errors.active_member && <p className="text-red-500 text-sm">Required</p>}
        </div>

      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-9 hover:cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
    </div>
  );
}

export default InputForm;
