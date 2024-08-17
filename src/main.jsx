import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import App from "./App.jsx"; // Import the main App component
import "./index.css"; // Import global CSS styles

// Render the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with BrowserRouter for routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
