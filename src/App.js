import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShippingForm from './views/ShippingForm';
import ListShippings from './views/ListShippings'

function App() {
  return (
    <div className="App">
      <BrowerRouter>
        <Switch>
          <Route exact path="/">
            <NavBar navLink={{ path: "/orders", Lable: "View Orders" }} />
            <ShippingForm />
          </Route>
          <Route path="/orders">
            <NavBar navLink={{ path: "/", Lable: "Home" }} />
            <ListShippings />
          </BrowerRouter>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
