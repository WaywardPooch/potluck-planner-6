import './App.scss';
import { Route, Link } from 'react-router-dom';
import LogInForm from './components/LogInForm';

function App() {
  return (
    <div className="App">
      <h1>Potluck Planner 6</h1>
      <Route exact path='/'><LogInForm></LogInForm></Route>
    </div>
  );
}

export default App;
