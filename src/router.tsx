import * as React from "react";
import {IndexRedirect, Redirect, Route, Router} from "dva/router";
import IndexPage from "./routes/IndexPage";
import IntraIndex from "./routes/IntraIndex";
import Tree from "./routes/Tree/Tree.tsx";

export default function ({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage}>
                <Route components={IntraIndex}>
                    <IndexRedirect to="/tree"/>
                    <Route path="/tree" components={Tree}/>
                    <Redirect path="*" to="/tree"/>
                </Route>
            </Route>
        </Router>
    );
};



