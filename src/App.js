import { FormState } from './formState/FormState';
import Input from './components/Input';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
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
        <section class="home-section">
          <div class="home-content">
            <i class="bx bx-menu" onClick={() => setShowMenu(!showMenu)}></i>
            <span class="text">Documentation</span>
          </div>
          <div>
            <Switch>
              <Route path="/bootstrap-inputs">
                <BootstrapInputs />
              </Route>
              <Route path="/material-ui-inputs">
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
