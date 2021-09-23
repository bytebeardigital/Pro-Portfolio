import './App.scss';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import About from "./pages/about";
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Error from './components/Error';
import Rick from './pages/rick';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
                            <Route path="/" exact component={About}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/portfolio" component={Portfolio}/>
                            <Route path="/contact" component={Contact}/>

                            <Route path="/fetch" component={Rick}/>
                            <Route component={Error} />
                        </Switch>
    </div>
  );
}

export default App;
