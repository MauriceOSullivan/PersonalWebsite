import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import London from "./pages/London";


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route path = '/' exact component={Home} />
            <Route path = '/projects' component={Projects} />
            <Route path = '/contact' component={Contact} />
            <Route path = '/london' component={London} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
