import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OurWorkPage from './components/OurWorkPage';
import GetEstimatePage from './components/GetEstimatePage';
import NavBar from './components/common/NavBar';
import GitInfo from 'react-git-info/macro';

import headerBackground from './images/header-background.png';
import WebVitalsBar from './components/common/WebVitalsBar';

function App() {
  const gitInfo = GitInfo();
  const gitHashURL = `https://github.com/briandesousa/web-vitals-demo/commit/${gitInfo.commit.shortHash}`;
  console.info(`[Version Info] ${gitHashURL} committed on ${gitInfo.commit.date}`);

  return (
    <main>
        <WebVitalsBar />
        <header style={{backgroundImage: `url(${headerBackground})`}}>
          <div className="wrapper">
            <h1>Northern Getaway Backyard Solutions</h1>
          </div>
        </header>
        <nav>
          <div className="wrapper">          
            <NavBar />
          </div>
        </nav>
        <section id="main">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/ourwork" component={OurWorkPage} />
            <Route path="/getestimate" component={GetEstimatePage} />
          </Switch>
        </section>
    </main>
  );
}

export default App;
