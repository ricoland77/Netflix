import Images from "./Images";
import movies from "../movies.json";

const Section = (props) => {
  // console.log(props.title);
  // console.log(props.tabImg);
  return (
    <>
      <h2>{props.title}</h2>

      {props.tabImg.map((elem) => {
        return <img src={elem.images} alt="" />;
      })}
    </>
  );
};

export default Section;
