import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Section from './Section';
import AppNavigation from './navigation/AppNavigation';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';

function App() {
  return (
    <div className="App">
          <Router>
          <Routes>
            <Route exact path="/" element={<AppNavigation><Section /></AppNavigation>} />
            <Route exact path="/album" element={<Section />} />
            <Route exact path="/signin" element={<SignIn/>} />
            <Route exact path="/signup" element={<SignUp/>}/>
          </Routes>
      </Router>

    </div>
  );
}

// import React from 'react'
// import  { Redirect } from 'react-router-dom'

// const ProtectedComponent = () => {
//   if (authFails)
//     return <Redirect to='/login'  />
//   }
//   return <div> My Protected Component </div>
// }

export default App;
