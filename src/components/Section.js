const Section = (props) => {
  // console.log(props.title);
  // console.log(props.tabImg);
  return (
    <>
      <h2 className="title">{props.title}</h2>

      {/* boucle sur ma props tabImg pour afficher les images */}
      <div className="carousel">
        <div className="films">
          {props.tabImg.map((url) => {
            return <img src={url} alt="liste des films" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
