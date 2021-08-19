import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../Containers/Home";
import Nav from "../Containers/Nav";
import { routes } from "./routes";

function Routes(){

    return(
        <Router>
            <Nav>
                <Switch>
                    {
                        routes.map(route =>(
                            <Route path={route.path} key={route.name} exact render={() => <route.component />} />
                        ) )
                    }
                </Switch>
            </Nav>
        </Router>
    );
};

export default Routes;