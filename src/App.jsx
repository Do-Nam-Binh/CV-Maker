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
          id: null,
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

  //Storing education information
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

  const [educationList, setEducationList] = useState(() => {
    const savedEduList = localStorage.getItem("eduList");
    return savedEduList ? JSON.parse(savedEduList) : [];
  });

  //Storing employment information
  const [employmentInfo, setEmploymentInfo] = useState(() => {
    const savedEmployInfo = localStorage.getItem("employInfo");
    return savedEmployInfo
      ? JSON.parse(savedEmployInfo)
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

  const [employmentList, setEmploymentList] = useState(() => {
    const savedEmployList = localStorage.getItem("employList");
    return savedEmployList ? JSON.parse(savedEmployList) : [];
  });

  const [image, setImage] = useState(
    localStorage.profileImg ? localStorage.profileImg : null
  );

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
  }, [personalDetails]);

  useEffect(() => {
    localStorage.profileImg = image;
  }, [image]);

  //Storing education in local storage
  useEffect(() => {
    localStorage.setItem("eduList", JSON.stringify(educationList));
  }, [educationList]);

  useEffect(() => {
    localStorage.setItem("eduInfo", JSON.stringify(educationInfo));
  }, [educationInfo]);

  //Storing employment in local storage
  useEffect(() => {
    localStorage.setItem("employInfo", JSON.stringify(employmentInfo));
  }, [employmentInfo]);

  useEffect(() => {
    localStorage.setItem("employList", JSON.stringify(employmentList));
  }, [employmentList]);

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

  const clearEduInfo = () => {
    setEducationInfo({
      eduName: "",
      school: "",
      city: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      desc: "",
    });
  };

  const handleAddEdu = () => {
    if (editingId !== null) {
      // Update existing education entry by id
      const updatedList = educationList.map((item) =>
        item.id === editingId ? { ...educationInfo, id: item.id } : item
      );
      setEducationList(updatedList);
      setEditingId(null); // Reset editingId after updating
    } else {
      // Add new education entry
      const newEduItem = { ...educationInfo, id: crypto.randomUUID() };
      setEducationList([...educationList, newEduItem]);
    }
    clearEduInfo();
  };

  const handleEditEdu = (id) => {
    const eduToEdit = educationList.find((item) => item.id === id);
    setEducationInfo(eduToEdit);
    setEditingId(id); // Set the id of the item being edited
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
        handleEditEdu={handleEditEdu}
        editingId={editingId}
        setEditingId={setEditingId}
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
