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

  //Storing projects information
  const [projectInfo, setProjectInfo] = useState(() => {
    const savedProjectInfo = localStorage.getItem("projectInfo");
    return savedProjectInfo
      ? JSON.parse(savedProjectInfo)
      : {
          title: "",
          summary: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          desc: "",
        };
  });

  const [projectList, setProjectList] = useState(() => {
    const savedProjectList = localStorage.getItem("projectList");
    return savedProjectList ? JSON.parse(savedProjectList) : [];
  });

  //Storing skills, languages & hobby information
  const [skillInfo, setSkillInfo] = useState({ name: "", level: 0 });
  const [languageInfo, setLanguageInfo] = useState({ name: "", level: 0 });
  const [hobbyInfo, setHobbyInfo] = useState({ name: "" });

  const [skillList, setSkillList] = useState([]);
  const [languageList, setLanguageList] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);

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

  //Storing projects in local storage
  useEffect(() => {
    localStorage.setItem("projectInfo", JSON.stringify(projectInfo));
  }, [projectInfo]);

  useEffect(() => {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }, [projectList]);

  function handleInfoChange(e, type) {
    const { name, value } = e.target;

    const infoMap = {
      personal: setPersonalDetails,
      education: setEducationInfo,
      employment: setEmploymentInfo,
      projects: setProjectInfo,
      skills: setSkillInfo,
      languages: setLanguageInfo,
      hobbies: setHobbyInfo,
    };

    const setInfo = infoMap[type] || "";
    setInfo((prevDetails) => ({
      ...prevDetails,
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
      case "projects":
        setProjectInfo({
          title: "",
          summary: "",
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
    const infoMap = {
      education: [educationList, setEducationList, educationInfo],
      employment: [employmentList, setEmploymentList, employmentInfo],
      projects: [projectList, setProjectList, projectInfo],
      skills: [skillList, setSkillList, skillInfo],
      languages: [languageList, setLanguageList, languageInfo],
      hobbies: [hobbyList, setHobbyList, hobbyInfo],
    };

    const [list, setList, info] = infoMap[type] || [];

    if (list) {
      const updatedList = editingId
        ? list.map((item) =>
            item.id === editingId ? { ...info, id: item.id } : item
          )
        : [...list, { ...info, id: crypto.randomUUID() }];

      setList(updatedList);
      clearInfo(type);
      setEditingId(null);
    } else {
      console.warn("Invalid type passed to handleAddOrEdit");
    }
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

      case "projects":
        const projectToEdit = projectList.find((item) => item.id === id);
        if (projectToEdit) setProjectInfo(projectToEdit);
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
        projectInfo={projectInfo}
        projectList={projectList}
        skillInfo={skillInfo}
        languageInfo={languageInfo}
        hobbyInfo={hobbyInfo}
        clearInfo={clearInfo}
      />
      <ResumePreview
        personalDetails={personalDetails}
        image={image}
        educationList={educationList}
        employmentList={employmentList}
        projectList={projectList}
      />
    </>
  );
}

export default App;
