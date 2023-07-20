import { Route } from 'react-router-dom';
import './App.css';
import CreateCustomer from './components/createCumtomer/CreateCustomer';
import EditCustomer from './components/editCustomer/EditCustomer';
import ReadCustomer from './components/readCustomer/ReadCustomer';

function App() {
  return (
    <div>
        <Route exact path="/">
           <CreateCustomer />
        </Route>
        <Route exact path="/readcustomer">
            <ReadCustomer />
        </Route>
        <Route exact path="/editcustomer">
          <EditCustomer />
        </Route>
    </div>
  );
}

export default App;
