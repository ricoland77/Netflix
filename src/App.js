import "./App.css";
import movies from "./movies.json";
import netflix from "./img/netflix.png";
import Section from "./components/Section";

function App() {
  console.log(movies);
  return (
    <div className="container">
      <img src={netflix} alt="logo Netflix" />
      {movies.map((elem) => {
        return <Section title={elem.category} tabImg={elem.images} />;
      })}
    </div>
  );
}

export default App;
