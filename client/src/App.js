import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Routes from "./components/Routing/Routes";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
