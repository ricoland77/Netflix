const Section = (props) => {
  // console.log(props.title);
  // console.log(props.tabImg);
  return (
    <>
      <h2 className="title">{props.title}</h2>

      <div className="carousel">
        <div className="films">
          {props.tabImg.map((elem) => {
            return <img src={elem} alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
