import "./App.css";
import StudentForm from './components/Studentsappform'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TrainingPort from './pages/index';
import Courses from "./components/courses";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student-form">Student Form</Link>
            </li>
            <li>
              <Link to="/training-portal">Training Portal</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div className="container home">
              <h1>Welcome to St Bathevara Training Courses</h1>
            </div>
          </Route>
          <Route path="/student-form">
            <div className="container form">
              <h3 className="card-title text-center">Student Application Form</h3>
              <StudentForm />
            </div>
          </Route>
          
          <Route path="/training-portal">
            <div className="container form">
              <h3 className="card-title text-center">Training Portal</h3>
              <TrainingPort />
            </div>
          </Route>
          
          {/* Add more routes for other components */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
