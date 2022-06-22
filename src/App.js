import './App.css';
import { Route, Switch } from 'react-router-dom';
import IMCCalculator from './pages/IMCCalculator';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/imc-calculator" component={ IMCCalculator } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
