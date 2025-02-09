import React, { useEffect, useState } from 'react';
import { useInfocontext } from '../../contexts/InfoContext';
import { NavLink, useNavigate } from 'react-router-dom';

const FileSelector = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState('');
    const {filepred,setfilepred} = useInfocontext();
    const navigate = useNavigate();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if(file && file.name.slice(-4)=='.csv'){
                setSelectedFile(file);
                readFileContent(file);
            }
            else{
                alert("choose a .csv file");
            }
        }
    };

    const handlebutton = ()=>{
        if(fileContent){
            const arr = fileContent.split('\n');
            setfilepred(arr);
            navigate("/dashboard");
        }
        else{
            alert("select a file");
        }
    }
    

    const readFileContent = (file) => {
        const reader = new FileReader();

        // Define the onload callback to handle the file content
        reader.onload = () => {
            setFileContent(reader.result);  // The content of the file
        };

        // Read the file as text (you can also use 'readAsDataURL' or 'readAsArrayBuffer' for other types of files)
        reader.readAsText(file);
    };

    return (
        <div className="flex min-h-screen flex-col items-center p-6 bg-gray-800 text-white shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Select a File</h2>
            <input 
                type="file" 
                onChange={handleFileChange}
                className="mb-4 bg-gray-700 text-white p-3 rounded-lg cursor-pointer"
            />
            
            {selectedFile && (
                <div className="text-lg mt-4">
                    <p><strong>Selected File:</strong> {selectedFile.name}</p>
                    <p><strong>File Size:</strong> {Math.round(selectedFile.size / 1024)} KB</p>
                </div>
            )}
            <button
            type="submit"
            onClick={handlebutton}
            className="px-9 hover:cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 border-none"
            >
            Predict
            </button>

            {selectedFile?(
                    <></>
                ):(
                    <>
                        <div className='mt-10 text-xl text-red-700'>Select and upload a .csv file</div>
                        <div className='mt-10 text-xl text-green-500'>Read {<NavLink to="/guide" className="text-green-500 hover:text-green-700">user guidlines</NavLink>} to learn about how to format your csv file</div>
                    </>
                )
            }

            {fileContent && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">File Content:</h3>
                    <pre className="bg-gray-700 text-white p-4 rounded-lg mt-2">{fileContent}</pre>
                </div>
            )}
        </div>
    );
};

export default FileSelector;
