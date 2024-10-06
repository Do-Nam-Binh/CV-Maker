import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResumePreview from "./components/ResumePreview";
import ResumeForm from "./components/ResumeForm";

function App() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const [headline, setHeadline] = useState("");

  function handleNameChange(e) {
    const { name, value } = e.target; // Destructure the name and value from the event target
    setFullName((prevFullName) => ({
      ...prevFullName,
      [name]: value, // Use computed property name to update the appropriate field
    }));
  }

  function handleHeadlineChange(e) {
    setHeadline(e.target.value);
  }

  return (
    <>
      <ResumeForm
        fullName={fullName}
        headline={headline}
        handleNameChange={handleNameChange}
        handleHeadlineChange={handleHeadlineChange}
      />
      <ResumePreview fullName={fullName} headline={headline} />
    </>
  );
}

export default App;
