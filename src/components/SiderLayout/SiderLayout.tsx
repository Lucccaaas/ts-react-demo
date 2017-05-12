/**
 * Created by yunge on 16/10/28.
 */
import {Menu, Icon} from "antd";
import React from "react";
import {Link} from "dva/router";
import apiConfig from "../../services/common/config.js";

const {entityTypeConfig} = apiConfig;

const SubMenu = Menu.SubMenu;

interface Props {
    location: any
}

interface State {
    theme?: string,
    current?: any
}

class SiderLayout extends React.Component<Props,State> {
    constructor(props: any) {
        super(props);
        this.state = {
            theme: 'dark',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }


    render() {
        const clzName = (key) => {
            return this.props.location.pathname === `/${key}`
                ? "ant-menu-item-selected"
                : "";
        };
        const menus = Object.keys(entityTypeConfig)
            .filter((key) => {
                const value = entityTypeConfig[key];
                return !!value.show;
            }).map((key) => {
                const value = entityTypeConfig[key];
                return <Menu.Item key={key} className={clzName(key)}>
                    <Link to={value.path}>{value.name}</Link>
                </Menu.Item>
            });
        return (
            <Menu theme={this.state.theme}
                  onClick={this.handleClick}
                  style={{width: 224}}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[this.state.current]}
                  mode="inline">
                <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>基本信息</span></span>}>
                    {menus}
                </SubMenu>
            </Menu>
        );
    }
}

export default SiderLayout;
