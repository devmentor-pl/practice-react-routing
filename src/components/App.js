import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";
import Home from "./Home";
import NotFound from "./NotFound";

const App = () => {
  const routes = [
    { url: "/home", text: "Strona główna" },
    { url: "/task01", text: "01" },
    { url: "/task02", text: "02" },
    { url: "/task03", text: "03" },
    { url: "/task04", text: "04" },
    { url: "/task05", text: "05" },
  ];

  const activeStyle = { border: "1px solid red", padding: "3px" };

  return (
    <Router>
      <nav>
        <ul>
          {routes.map((item) => (
            <li key={item.url}>
              <NavLink activeStyle={activeStyle} to={item.url}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/task01" component={Task01} />
        <Route path="/task02" component={Task02} />
        <Route path="/task03" component={Task03} />
        <Route path="/task04" component={Task04} />
        <Route path="/task05" component={Task05} />
        <Route path="/404.html">
          <NotFound />
        </Route>
        <Route>
          <Redirect to="/404.html" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;