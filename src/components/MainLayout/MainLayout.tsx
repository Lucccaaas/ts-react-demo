/**
 * Created by yunge on 16/10/27.
 */
import React from "react";
import {connect} from "dva";
import * as styles from "./MainLayout.less";
import Header from "./Header";
import SideLayout from "../SiderLayout/SiderLayout";

function MainLayout ({children, location, styles}: {children: JSX.Element}) {
    return (
        <div className={styles['ant-layout-aside']}>
            <div className={styles['ant-layout-sider']}>
                <div className={styles["ant-layout-logo"]}>
                    <div className={styles.logo}></div>
                </div>
                <SideLayout location={location} />
            </div>
            <div className={styles["ant-layout-main"]}>
                <div className={styles["ant-layout-header"]}>
                    <Header location={location}/>
                </div>
                <div className={styles["ant-layout-container"]}>
                    <div className={styles["ant-layout-content"]}>
                            {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

function addStyles() {
   return {styles};
}

export default connect(addStyles)(MainLayout);
