import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <li>Contato</li>
      </ul>
      
      <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/company'>
          <Company/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        <Route exact path='/newproject'>
          <NewProject/>
        </Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
