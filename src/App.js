import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section from './Section';
import AppNavigation from './navigation/AppNavigation';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import Topic from './topic/Topic';

function App() {
  const key = sessionStorage.getItem('key');
  return (
    <div className="App">
      <Router>
        <Routes>
          {key ?
            <Route exact path="/" element={<AppNavigation><Section /></AppNavigation>} />
            : <Route exact path="/" element={<SignIn />} />}
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/topic/:about/:part" element={<AppNavigation><Topic /></AppNavigation>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
