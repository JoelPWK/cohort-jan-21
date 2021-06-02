import Register from "./components/Register";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CarouselBootstrap from './components/Carousel/CarouselBootstrap'

function App() {
    return (
        <div className="App">
            <Navigation />
            <CarouselBootstrap />
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
