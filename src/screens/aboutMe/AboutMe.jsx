import "./AboutMe.css";
import me from "./me.png";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-container">
      <img src={me} alt="Personal Img" />
      <div>
        <h1>About Me</h1>
        <p>
          Jag är en Junior Webbutvecklare med erfarenhet av både backend- och
          frontend-utveckling. Jag är särskilt kunnig inom WordPress och har
          omfattande kunskap om programmeringsspråk som HTML5,
          JavaScript(React/React native), CSS, NodeJS, Bootstrap, React och
          MongoDB. Jag är också en Android- utvecklare med erfarenhet av Kotlin.
          Utöver mina utvecklingsfärdigheter är jag också en erfaren grafisk
          formgivare med en stark känsla för design och en djup förståelse för
          färgteori, typografi och layout.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
