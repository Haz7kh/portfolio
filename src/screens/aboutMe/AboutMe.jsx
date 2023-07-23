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
          Hi there! 👋 I'm a passionate junior applications/web developer with a
          strong focus on creating engaging and user-friendly digital
          experiences. My journey into the world of web development began with
          an insatiable curiosity for crafting interactive and dynamic websites
          and applications. My development toolkit includes a wide array of
          modern technologies. I'm well-versed in using React and React Native
          to build responsive and intuitive user interfaces for web and mobile
          platforms. In addition, I have hands-on experience with Kotlin for
          Android app development, allowing me to create impactful and efficient
          native Android applications. As a backend enthusiast, I work with
          Node.js and MongoDB to architect scalable and robust server-side
          applications. I'm also familiar with Firebase, leveraging its
          real-time database and authentication services to enhance the user
          experience of my projects. Besides being a developer, I possess a
          creative side as well. I enjoy exploring graphic design, including
          crafting unique logos and engaging videos. Whether it's photo editing
          or video manipulation, I love adding an artistic touch to my projects.
          Having worked with WordPress extensively, I can confidently navigate
          its ecosystem to create captivating and content-rich websites. My
          experience with WordPress enables me to customize themes, develop
          plugins, and optimize performance for seamless user experiences. I
          thrive in collaborative environments and cherish the opportunity to
          learn from and contribute to a team of like-minded developers. I
          believe in constant growth and continuously push myself to stay
          updated with the latest industry trends and best practices. When I'm
          not immersed in code, you can find me honing my design skills,
          exploring new technologies, or enjoying the great outdoors. I'm always
          excited to take on new challenges and embark on innovative projects
          that make a positive impact on people's lives. If you have any
          exciting projects or opportunities, let's connect! I'm eager to share
          my passion for development and design and bring your ideas to life.
          Let's build something amazing together! 🚀
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
