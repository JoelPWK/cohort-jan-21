import Register from "./components/Auth/Register";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Router>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
