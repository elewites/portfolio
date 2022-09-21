import "./css/additional.css";

export const Additional = () => {
  return (
    <div className="additional-container">
      <text id="additional-projects" className="title">Additional Projects:</text>
      <a className="title" href={"https://illustrious-pavlova-780152.netlify.app"} target="_blank" >
        Scatterploty
      </a>
      <a className="title" href={"https://monumental-meringue-d3c5fa.netlify.app"} target="_blank" >
        Tallest-Person
      </a>
      <a className="title" href={"https://zealous-booth-1196b4.netlify.app"} target="_blank" >
        BiologyQuiz
      </a>
    </div>
  );
};