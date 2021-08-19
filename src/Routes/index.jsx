import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Containers/Nav";
import { routes } from "./routes";

function Routes(){

    return(
        <Router>
            <Switch>
                <Nav>
                    {
                        routes.map(route =>(
                            <Route path={route.path} key={route.name} exact render={() => <route.component />} />
                        ) )
                    }
                </Nav>
            </Switch>
        </Router>
    );
};

export default Routes;