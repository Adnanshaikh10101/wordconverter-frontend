import React from "react";

function About() {
  return (
    <div className="containera" style={{ padding: "30px" }}>
      <h1>About Me</h1>

      <p>
        Hello! My name is <strong>Adnan Shaikh</strong>. I am a passionate web
        developer currently learning and building projects using the MERN stack.
        I enjoy creating simple and useful web applications that solve real-world
        problems and improve user experience.
      </p>

      <h2>About This Project</h2>

      <p>
        This web application is a <strong>Word Converter</strong> tool designed
        to make text manipulation quick and easy. Users can convert text to
        uppercase, lowercase, remove extra spaces, copy text, and perform other
        useful operations efficiently.
      </p>

      <h2>My Vision</h2>

      <p>
        The goal behind creating this application was to build a simple yet
        practical tool that people can use in their daily tasks. I wanted to
        strengthen my frontend development skills while also focusing on clean UI
        and user-friendly design.
      </p>

      <p>
        In the future, I plan to add more features like text formatting options,
        dark mode, file upload support, and advanced text analysis tools.
      </p>

      <h2>Why I Built This</h2>

      <ul>
        <li>To practice React and component-based architecture</li>
        <li>To improve problem-solving skills</li>
        <li>To build something useful and practical</li>
        <li>To create a clean and responsive UI</li>
      </ul>
    </div>
  );
}

export default About;