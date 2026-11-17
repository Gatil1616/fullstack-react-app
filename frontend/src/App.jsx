
import { useState, useEffect } from "react";
import "./App.css";

function App() {

    // Store the backend message
    const [message, setMessage] = useState("");

    // Fetch data when the application loads
    useEffect(() => {

        fetch("http://localhost:5000/api/message")

            .then(response => response.json())

            .then(data => {
                setMessage(data.message);
            })

            .catch(error => {
                console.log("Error:", error);
            });

    }, []);

    return (
        <div className="App">

            <h1>My React Application</h1>

            <h2>Backend Message:</h2>

            <p>{message}</p>

        </div>
    );
}

export default App;
