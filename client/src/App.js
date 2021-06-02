import Register from "./components/pages/Register";
import Ingredients from "./components/pages/Ingredients";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CarouselBootstrap from "./components/Carousel/CarouselBootstrap";

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <CarouselBootstrap />
            <Router>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/ingredients">
                        <Ingredients />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
