import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
          <Router>
          <Routes>
            <Route exact path="/" element={<SignIn/>} />
            <Route exact path="/signUp" element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
