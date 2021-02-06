import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';

function App(props) {
  // const [employees, setEmployees] = useState(null);
  // let history = useHistory();

  // const getEmployees = name => {
  //   const obj = { name };

  //   const req = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/JSON',
  //     },
  //     body: JSON.stringify(obj),
  //   };

  //   fetch('http://localhost:5000/api/get-employees', req)
  //     .then(res => res.json())
  //     .then(data => {
  //       setEmployees(data);
  //       history.push("/searchresults");
  //     });
  // };

  return (
    <Router>
      <Switch>
        <Route path="/searchresults" exact>
          <SearchResults />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
