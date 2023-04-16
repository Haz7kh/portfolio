import "./AboutMe.css";
import me from "./me.png";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-container">
      <img src={me} alt="Personal Img" />
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          reprehenderit repudiandae fugit, minus, consequuntur iste vitae nihil
          molestias rerum saepe laboriosam, eum ipsum? Beatae at a aut
          aspernatur libero quibusdam iusto aperiam delectus, distinctio earum
          voluptate, ex tempore! Pariatur mollitia illum accusamus tempore
          dolore quibusdam culpa illo porro debitis tenetur.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
