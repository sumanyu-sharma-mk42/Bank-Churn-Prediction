from flask import Flask, request, jsonify
import pickle  # Use this if the model is saved with pickle
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

with open("model2.pkl", "rb") as f:
    model = pickle.load(f)

@app.route('/', methods=['GET'])
def home():
    return "<h1>hello</h1>"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get JSON data from frontend
    country_mapping = {"France": 0 ,"france":0, "Spain": 1, "spain": 1, "Germany": 2, "germany": 2}  # Example encoding
    gender_mapping = {"Male": 0, "Female": 1,"male": 0, "female": 1}
    input_data = np.array([
        int(data["credit_score"]),  # Convert to integer
        country_mapping.get(data["country"], -1),  # Default to -1 if not found
        gender_mapping.get(data["gender"], -1),
        int(data["age"]),
        int(data["tenure"]),
        int(float(data["balance"])),  # Ensure numeric conversion
        int(data["products_number"]),
        int(data["credit_card"]==True),  # Convert boolean-like values
        int(data["active_member"]==True),  # Convert boolean-like values
        int(float(data["salary"]))  # Ensure numeric conversion
    ]).reshape(1, -1)
    prediction = model.predict_proba(input_data).tolist()  # Convert to list
    pred = model.predict(input_data).tolist()
    return jsonify({"prediction":prediction, "pred":pred}) # Send response
    

@app.route('/predictfile', methods=['POST'])
def predictfile():
    filedata = request.get_json()
    country_mapping = {"France": 0 ,"france":0, "Spain": 1, "spain": 1, "Germany": 2, "germany": 2}  # Example encoding
    gender_mapping = {"Male": 0, "Female": 1,"male": 0, "female": 1}
    
    input_data = np.array([
        [
            int(row[1]),  # Convert to integer
            country_mapping.get(row[2], -1),  # Default to -1 if not found
            gender_mapping.get(row[3], -1),
            int(row[4]),
            int(row[5]),
            int(float(row[6])),  # Ensure numeric conversion
            int(row[7]),
            int(row[8] == '1'),  # Convert boolean-like values
            int(row[9] == '1'),  # Convert boolean-like values
            int(float(row[10]))  # Ensure numeric conversion
        ]
        for row in filedata
    ])

    # Make batch predictions
    predictions = model.predict(input_data)
    
    # Count churned predictions
    count = np.sum(predictions)  # Assuming model returns 1 for churned users
    
    # Calculate percentage
    percentage = (count / len(filedata)) * 100
    return jsonify({"percentage": percentage, "churned": int(count), "total": len(filedata)})



if __name__ == '__main__':
    app.run(debug=True)  # Run Flask app
