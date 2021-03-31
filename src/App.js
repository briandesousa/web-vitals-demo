import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OurWorkPage from './components/OurWorkPage';
import GetEstimatePage from './components/GetEstimatePage';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <main>
        <h1>Northern Getaway Backyard Solutions</h1>
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/ourwork" component={OurWorkPage} />
          <Route path="/getestimate" component={GetEstimatePage} />
        </Switch>
    </main>
  );
}

export default App;
