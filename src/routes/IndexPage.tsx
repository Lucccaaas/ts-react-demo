import React from "react";
import {connect} from "dva";
import * as styles from "./IndexPage.less";

interface IndexPageParam {
    children: JSX.Element,
    styles: any
}

function IndexPage({children, styles}:IndexPageParam) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

function addStyles() {
    return {styles}
}

export default connect(addStyles)(IndexPage);
