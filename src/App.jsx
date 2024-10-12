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
          position: "",
          employer: "",
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

  function handleInfoChange(e, type) {
    const { name, value } = e.target;
    switch (type) {
      case "personal":
        setPersonalDetails((prevPersonalDetails) => ({
          ...prevPersonalDetails,
          [name]: value,
        }));
        break;
      case "education":
        setEducationInfo((prevEduInfo) => ({
          ...prevEduInfo,
          [name]: value,
        }));
        break;
      case "employment":
        setEmploymentInfo((prevEmployInfo) => ({
          ...prevEmployInfo,
          [name]: value,
        }));
        break;
    }
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

  const clearInfo = (type) => {
    switch (type) {
      case "education":
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
        break;
      case "employment":
        setEmploymentInfo({
          position: "",
          employer: "",
          city: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          desc: "",
        });
        break;
    }
  };

  const handleAddOrEdit = (type) => {
    switch (type) {
      case "education":
        if (editingId) {
          // Update existing education entry
          const updatedList = educationList.map((item) =>
            item.id === editingId ? { ...educationInfo, id: item.id } : item
          );
          setEducationList(updatedList);
        } else {
          // Add new education entry
          const newEduItem = { ...educationInfo, id: crypto.randomUUID() };
          setEducationList([...educationList, newEduItem]);
        }
        clearInfo("education");
        break;

      case "employment":
        if (editingId) {
          // Update existing employment entry
          const updatedList = employmentList.map((item) =>
            item.id === editingId ? { ...employmentInfo, id: item.id } : item
          );
          setEmploymentList(updatedList);
        } else {
          // Add new employment entry
          const newEmployItem = { ...employmentInfo, id: crypto.randomUUID() };
          setEmploymentList([...employmentList, newEmployItem]);
        }
        clearInfo("employment");
        break;

      default:
        console.warn("Invalid type passed to handleAddOrEdit");
        break;
    }
    setEditingId(null); // Reset editing id after add/edit
  };

  const handleEdit = (id, type) => {
    switch (type) {
      case "education":
        const eduToEdit = educationList.find((item) => item.id === id);
        if (eduToEdit) setEducationInfo(eduToEdit);

        break;

      case "employment":
        const employToEdit = employmentList.find((item) => item.id === id);
        if (employToEdit) setEmploymentInfo(employToEdit);
        break;

      default:
        console.warn("Invalid type passed to handleEdit");
        break;
    }
    setEditingId(id); // Track the entry being edited
  };

  return (
    <>
      <ResumeForm
        personalDetails={personalDetails}
        image={image}
        handleInfoChange={handleInfoChange}
        handleImageUpload={handleImageUpload}
        educationInfo={educationInfo}
        educationList={educationList}
        handleAddOrEdit={handleAddOrEdit}
        handleEdit={handleEdit}
        editingId={editingId}
        setEditingId={setEditingId}
        employmentInfo={employmentInfo}
        employmentList={employmentList}
        clearInfo={clearInfo}
      />
      <ResumePreview
        personalDetails={personalDetails}
        image={image}
        educationList={educationList}
        employmentList={employmentList}
      />
    </>
  );
}

export default App;
