/**
 *
 * Created by yunge on 16/10/28.
 */
import React from "react";
import {connect} from "dva";
import MainLayout from "../components/MainLayout/MainLayout";

function IntraIndex ({children, location}: {children: JSX.Element, location: any}) {
    return (
        <MainLayout location={location}>
            {children}
        </MainLayout>
    );
}

export default connect()(IntraIndex);
