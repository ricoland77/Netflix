import "./App.css";
import movies from "./movies.json";
import netflix from "./img/netflix.png";
import Section from "./components/Section";

function App() {
  console.log(movies);
  return (
    <div className="container">
      <img src={netflix} alt="logo Netflix" />

      {/* boucle sur mon fichier movies.json pour les titres des catégories */}
      {movies.map((cat) => {
        console.log(cat);
        return <Section title={cat.category} tabImg={cat.images} />;
      })}
    </div>
  );
}

export default App;
