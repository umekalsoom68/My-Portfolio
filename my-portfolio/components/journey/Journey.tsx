

import React from 'react';

const Journey = () => {
  const education = [
    {
      title: "First-Middle",
      description: "From a young age, I've been fascinated by both science and technology. My curiosity to understand how things work and to create innovative solutions led me to explore various scientific concepts and technological advancements.  ",
      date: "2010 - 2019"
    },
    {
      title: "High School - Matric",
      description: " During my high school years, I immersed myself in subjects like Physics, Chemistry, and Biology. Participating in science fairs and projects allowed me to apply theoretical knowledge to practical scenarios, further fueling my passion for both science and technology.  ",
      date: "2020 - 2022"
    },
    {
      title: "FSc (Faculty of Science) Experience  ",
      description: " Currently, I am Complete my FSc,. This phase has been incredibly transformative, as I’ve been exposed to advanced scientific theories and laboratory work. Courses like [Specific Courses or Subjects] have been particularly influential in shaping my understanding and interest in science. ",
      date: "2022 - 2024"
    }
  ];

  const experience = [
    {
      title: "Exploring Web Development ",
      description: " In parallel with my FSc studies, I developed a keen interest in web development. Learning technologies like HTML, CSS, JavaScript, and frameworks like Next.js hasbeen both challenging and rewarding. I have been actively working on projects to apply my knowledge and build practical skills. I am very Thankfull to my LiaChalkboardTeacherSolid.",
      date: "2024"
    },
    {
      title: "Other Skills",
      description: " Alongside my FSc studies, I have been self-learning computer sciences.o further enhance my skills, I have participated in various courses and workshops:Graphic and designing,Thesis Composing .Vedio editing,islamic Courses and Running a small Acedmy.  .",
      date: "2012 - 2024"
    },
    {
      title: "Future Aspirations",
      description: " As I continue my academic and professional journey, I aspire to integrate my knowledge of science and technology. I plan to pursue a BS in Computer Science to further advance my skills in web development. My goal is to become a proficient web developer while also contributing to various fields through my skills in graphic design, video editing, and more. I am particularly interested in exploring how technology can be leveraged to solve real-world problems and drive innovation. .",
      date: ""
    }
  ];

  return (
  
      <div className="max-w-4xl h-screen w-screen mx-auto py-12 bg-gray-800 rounded-lg mb-10 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          My <span className="text-blue-500">Journey</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white mr-10">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full h-2 w-2 mr-4"></div>
                  <h3 className="text-xl font-medium text-white">{edu.title}</h3>
                </div>
                <p className="text-gray-400">{edu.date}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full h-2 w-2 mr-4"></div>
                  <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                </div>
                <p className="text-gray-400">{exp.date}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Journey;
