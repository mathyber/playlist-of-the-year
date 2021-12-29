import React from 'react';
import {Route, Switch} from "react-router-dom";
import {FINAL_LINK, GAMES_LINK, GROUPS_USERS_LINK, HOME_LINK, RROBIN_LINK, USERS_LINK} from "./links";
import Users from "../components/Users";
import Games from "../components/GamesResultImages";
import {Redirect} from "react-router";
import LogoPage from "../components/Logo";
import Groups from "../components/GroupUsers";
import RRobin from "../components/RoundRobin";
import Final from "../components/FinalImage";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path={HOME_LINK} component={LogoPage} />
            <Route exact path={USERS_LINK} component={Users} />
            <Route exact path={FINAL_LINK} component={Final} />
            <Route exact path={GAMES_LINK} component={Games} />
            <Route exact path={GROUPS_USERS_LINK} component={Groups} />
            <Route exact path={RROBIN_LINK} component={RRobin} />
        </Switch>
    )
};

export default MainRoute;
