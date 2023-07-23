import "./AboutMe.css";
import me from "./me.png";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <div className="profile-image">
        {/* Add your profile image here */}
        <img src={me} alt="Personal Img" />
      </div>
      <div className="about-me-content">
        <h1>About Me</h1>
        <p>
          Hello, I am a Junior Web Developer with a passion for building
          user-friendly and intuitive websites. I have experience in both
          frontend and backend development, and I enjoy working with
          technologies like React, Node.js, and MongoDB.
        </p>
        <p>
          As a graphic designer, I also have a keen eye for aesthetics and
          strive to create visually appealing designs. I love combining my
          coding skills with my design sense to create beautiful and functional
          web applications.
        </p>
        <p>
          When I'm not coding or designing, you can find me exploring the latest
          trends in web development and honing my skills to stay updated with
          the ever-changing tech landscape.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
  // return (
  //   <div className="about-me-container">
  //     <div className="profile-image">
  //       {/* Add your profile image here */}
  //       <img src={me} alt="Personal Img" />
  //     </div>
  //     <div className="about-me-content">
  //       <h1>About Me</h1>
  //       <p>
  //         Hello, I am a Junior Web Developer with a passion for building
  //         user-friendly and intuitive websites. I have experience in both
  //         frontend and backend development, and I enjoy working with
  //         technologies like React, Node.js, and MongoDB.
  //       </p>
  //       <p>
  //         As a graphic designer, I also have a keen eye for aesthetics and
  //         strive to create visually appealing designs. I love combining my
  //         coding skills with my design sense to create beautiful and functional
  //         web applications.
  //       </p>
  //       <p>
  //         When I'm not coding or designing, you can find me exploring the latest
  //         trends in web development and honing my skills to stay updated with
  //         the ever-changing tech landscape.
  //       </p>
  //       {/* Add more content as needed */}
  //     </div>
  //   </div>
  // );
  // return (
  //   <div id="about" className="aboutme-container">
  //     <img src={me} alt="Personal Img" />
  //     <div>
  //       <h1>About Me</h1>
  //       <p>
  //         "I am a Junior Web Developer with experience in both backend and
  //         frontend development. I am particularly knowledgeable in WordPress and
  //         have extensive knowledge of programming languages such as HTML5,
  //         JavaScript (React/React Native), CSS, NodeJS, Bootstrap, React, and
  //         MongoDB. I am also an Android developer with experience in Kotlin. In
  //         addition to my development skills, I am also an experienced graphic
  //         designer with a strong sense of design and a deep understanding of
  //         color theory, typography, and layout."
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default AboutMe;
