import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import IMCCalculator from './pages/IMCCalculator';
import GestationalAgeCalculator from './pages/GestationalAgeCalculator';
import RegularCalculator from './pages/RegularCalculator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/imc-calculator" component={ IMCCalculator } />
        <Route path="/gestational-age-calculator" component={ GestationalAgeCalculator } />
        <Route path="/regular-calculator" component={ RegularCalculator } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
