import { Colonias } from "./components/Colonias";
import { Estados } from "./components/Estados";
import { Municipios } from "./components/Municipios";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Mexico Ciudades</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h2>Estados</h2>
          <Estados />
        </div>
        <div className="col-4">
          <h2>Municipios</h2>
          <Municipios />
        </div>
        <div className="col-4">
          <h2>Colonias</h2>
          <Colonias />
        </div>
      </div>
    </div>
  );
}

export default App;
