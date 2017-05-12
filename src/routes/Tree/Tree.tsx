import React from "react";
import TreeState = Tree.TreeState;
import TreeProps = Tree.TreeProps;


namespace Tree {

    export interface TreeNode {
        collapse: boolean,
        text: String,
        children: [TreeNode]
    }

    export interface TreeProps {
        treeNode: TreeNode
    }

    export interface TreeState {
        treeNode: TreeNode
    }

}

class Tree extends React.Component <TreeProps, TreeState> {
    constructor(props, state) {
        super(props, state);
        this.state = this.props;
    }

    toggle = () => {
        const treeNode = this.state.treeNode;
        treeNode.collapse = !treeNode.collapse;
        this.setState({treeNode});
    }

    render() {
        const children = this.state.treeNode.children.map((treeNode, index) => {
            return <Tree key={index} treeNode={treeNode}/>;
        });
        return <div>
            <p>
                <span onClick={this.toggle}>
                {this.state.treeNode.children.length > 0 && this.state.treeNode.collapse ? '+' : '-'}
            </span>
                {this.state.treeNode.text}
            </p>
            <span>
                &nbsp;&nbsp;
                {!this.state.treeNode.collapse && children}
            </span>
        </div>
    }
}

export default function () {
    const treeNode = {
        collapse: false,
        text: 'parent',
        children: [{
            collapse: true,
            text: 'children-1',
            children: [{
                collapse: true,
                text: 'children-1-1',
                children: []
            }, {
                collapse: true,
                text: 'children-1-2',
                children: []
            }
            ]
        }, {
            collapse: true,
            text: 'children-2',
            children: [{
                collapse: true,
                text: 'children-2-1',
                children: []
            }, {
                collapse: true,
                text: 'children-2-2',
                children: []
            }
            ]
        }]
    };
    return (
        <Tree treeNode={treeNode}/>
    )
}



