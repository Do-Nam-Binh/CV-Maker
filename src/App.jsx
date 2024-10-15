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
          id: null,
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
          id: null,
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
          id: null,
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
  const [skillInfo, setSkillInfo] = useState(() => {
    const savedSkillInfo = localStorage.getItem("skillInfo");
    return savedSkillInfo
      ? JSON.parse(savedSkillInfo)
      : { id: null, name: "", level: 0 };
  });

  const [languageInfo, setLanguageInfo] = useState(() => {
    const savedLanguageInfo = localStorage.getItem("languageInfo");
    return savedLanguageInfo
      ? JSON.parse(savedLanguageInfo)
      : {
          id: null,
          name: "",
          level: 0,
        };
  });

  const [hobbyInfo, setHobbyInfo] = useState(() => {
    const savedHobbyInfo = localStorage.getItem("hobbyInfo");
    return savedHobbyInfo ? JSON.parse(savedHobbyInfo) : { id: null, name: "" };
  });

  const [skillList, setSkillList] = useState(() => {
    const savedSkillList = localStorage.getItem("skillList");
    return savedSkillList ? JSON.parse(savedSkillList) : [];
  });
  const [languageList, setLanguageList] = useState(() => {
    const savedLanguageList = localStorage.getItem("languageList");
    return savedLanguageList ? JSON.parse(savedLanguageList) : [];
  });
  const [hobbyList, setHobbyList] = useState(() => {
    const savedHobbyList = localStorage.getItem("hobbyList");
    return savedHobbyList ? JSON.parse(savedHobbyList) : [];
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

  //Storing projects in local storage
  useEffect(() => {
    localStorage.setItem("projectInfo", JSON.stringify(projectInfo));
  }, [projectInfo]);

  useEffect(() => {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }, [projectList]);

  //Storing skills, languages, hobbies in local storage
  useEffect(() => {
    localStorage.setItem("skillInfo", JSON.stringify(skillInfo));
  }, [skillInfo]);

  useEffect(() => {
    localStorage.setItem("skillList", JSON.stringify(skillList));
  }, [skillList]);

  useEffect(() => {
    localStorage.setItem("languageInfo", JSON.stringify(languageInfo));
  }, [languageInfo]);

  useEffect(() => {
    localStorage.setItem("languageList", JSON.stringify(languageList));
  }, [languageList]);

  useEffect(() => {
    localStorage.setItem("hobbyInfo", JSON.stringify(hobbyInfo));
  }, [hobbyInfo]);

  useEffect(() => {
    localStorage.setItem("hobbyList", JSON.stringify(hobbyList));
  }, [hobbyList]);

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
      case "skills":
        setSkillInfo({
          name: "",
          level: 0,
        });
        break;
      case "languages":
        setLanguageInfo({
          name: "",
          level: 0,
        });
        break;
      case "hobbies":
        setHobbyInfo({
          name: "",
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
    const infoMap = {
      education: [educationList, setEducationInfo],
      employment: [employmentList, setEmploymentInfo],
      projects: [projectList, setProjectInfo],
      skills: [skillList, setSkillInfo],
      languages: [languageList, setLanguageInfo],
      hobbies: [hobbyList, setHobbyInfo],
    };

    const [list, setFunction] = infoMap[type] || [];

    const itemToEdit = list.find((item) => item.id === id);
    if (itemToEdit) setFunction(itemToEdit);

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
        skillList={skillList}
        languageInfo={languageInfo}
        languageList={languageList}
        hobbyInfo={hobbyInfo}
        hobbyList={hobbyList}
        clearInfo={clearInfo}
      />
      <ResumePreview
        personalDetails={personalDetails}
        image={image}
        educationList={educationList}
        employmentList={employmentList}
        projectList={projectList}
        skillList={skillList}
        languageList={languageList}
        hobbyList={hobbyList}
      />
    </>
  );
}

export default App;
