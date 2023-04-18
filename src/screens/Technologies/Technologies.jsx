import "./Technologies.css";
import { techs } from "./techs";

const Technologies = () => {
  const tecnolgisList = techs.map((tech, index) => {
    return (
      <div className="tech-frames">
        <img src={tech.image} alt={tech.name} />
        <h3>{tech.name}</h3>
      </div>
    );
  });
  return (
    <div id="technologies" className="technologies-container">
      <h1>Some of the Technologies I use</h1>
      <div className="tech-grid-container">{tecnolgisList}</div>
      <h3>And more ... </h3>
    </div>
  );
};

export default Technologies;
