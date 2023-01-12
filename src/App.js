import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <p>Coucou</p>
      <Welcome pouet="Oui" test="mon super test" truc="bidule" monNombrePref={7} />
    </div>
  );
}

export default App;
