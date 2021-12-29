import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HOME_LINK} from "./links";
import HomePage from "../containers/homePage";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path={HOME_LINK} component={HomePage} />
        </Switch>
    )
};

export default MainRoute;
