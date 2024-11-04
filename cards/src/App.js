import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import At from "./image/at.jpg";
import kedi from "./image/kedi.jpg";
import köpek from "./image/köpek.jpg";
import kuş from "./image/kuş.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              image={kedi}
              title="Kedi"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae suscipit veritatis et? Natus a voluptas quod dicta iusto dolore asperiores? Dolorum, ipsum quo architecto vero asperiores ipsa suscipit maxime?"
            />
          </div>
          <div className="column">
            <Course
              image={köpek}
              title="Köpek"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae suscipit veritatis et? Natus a voluptas quod dicta iusto dolore asperiores? Dolorum, ipsum quo architecto vero asperiores ipsa suscipit maxime?"
            />
          </div>
          <div className="column">
            <Course
              image={kuş}
              title="Kuş"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae suscipit veritatis et? Natus a voluptas quod dicta iusto dolore asperiores? Dolorum, ipsum quo architecto vero asperiores ipsa suscipit maxime?"
            />
          </div>

          <div className="column">
            <Course
              image={At}
              title="At"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae suscipit veritatis et? Natus a voluptas quod dicta iusto dolore asperiores? Dolorum, ipsum quo architecto vero asperiores ipsa suscipit maxime?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
