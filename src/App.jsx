import { useState, useEffect } from "react";
import "./App.css";
import ResumePreview from "./components/ResumePreview";
import ResumeForm from "./components/ResumeForm";

function App() {
  const [personalDetails, setPersonalDetails] = useState(() => {
    const savedPersonalInfo = localStorage.getItem("personalDetails");
    return savedPersonalInfo
      ? JSON.parse(savedPersonalInfo)
      : {
          firstName: "",
          lastName: "",
          headline: "",
          email: "",
          phone: "",
          address: "",
          postcode: "",
          city: "",
        };
  });

  const [educationInfo, setEducationInfo] = useState(() => {
    const savedEduInfo = localStorage.getItem("eduInfo");
    return savedEduInfo
      ? JSON.parse(savedEduInfo)
      : {
          eduName: "",
          school: "",
          city: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          desc: "",
        };
  });

  const [educationList, setEducationList] = useState([]);

  const [image, setImage] = useState(
    localStorage.profileImg ? localStorage.profileImg : null
  );

  useEffect(() => {
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
  }, [personalDetails]);

  useEffect(() => {
    localStorage.profileImg = image;
  }, [image]);

  function handlePersonalDetailChange(e) {
    const { name, value } = e.target;
    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [name]: value,
    }));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleEduInfoChange(e) {
    const { name, value } = e.target;
    setEducationInfo((prevEduInfo) => ({
      ...prevEduInfo,
      [name]: value,
    }));
  }

  const handleAddEdu = () => {
    const newEduItem = { ...educationInfo, id: crypto.randomUUID() };
    setEducationList([...educationList, newEduItem]);
  };

  return (
    <>
      <ResumeForm
        personalDetails={personalDetails}
        image={image}
        handlePersonalDetailChange={handlePersonalDetailChange}
        handleImageUpload={handleImageUpload}
        educationInfo={educationInfo}
        educationList={educationList}
        handleEduInfoChange={handleEduInfoChange}
        handleAddEdu={handleAddEdu}
      />
      <ResumePreview
        personalDetails={personalDetails}
        image={image}
        educationList={educationList}
      />
    </>
  );
}

export default App;
