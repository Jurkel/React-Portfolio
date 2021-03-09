
import { Switch, Route } from 'react-router-dom';
import './styles/app.scss'
//Adding components
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
