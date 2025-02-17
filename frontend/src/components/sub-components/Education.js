import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description:
        "I completed my matriculation at my hometown school, building a strong academic foundation.",
    },
    {
      _id: "2",
      title: "Intermediate",
      description:
        "I completed my intermediate education in the pre-engineering field, laying the groundwork for my engineering studies.",
    },
    {
      _id: "3",
      title: "Graduation",
      description:
        "Currently persuing a degree in Computer Science from Institute Of Southern Punjab (ISP),Multan Pakistan.   ",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;