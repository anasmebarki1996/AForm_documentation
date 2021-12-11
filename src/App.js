import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapInputs from './pages/bootsrap-inputs';
import MaterialUiInputs from './pages/material-ui-inputs';
import Sidebar from './layouts/Sidebar/Sidebar';
import { useState } from 'react';
import Welcome from './pages/Welcome';
function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <Router>
      <>
        <Sidebar showMenu={showMenu} />
        <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu" onClick={() => setShowMenu(!showMenu)}></i>
            <span className="text">Documentation</span>
          </div>
          <div>
            <Switch>
              <Route path="/bootstrap-form">
                <BootstrapInputs />
              </Route>
              <Route path="/material-ui-form">
                <MaterialUiInputs />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </div>
        </section>
      </>
    </Router>
  );
}

export default App;
