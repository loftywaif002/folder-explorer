import React, { Component } from 'react';
import Node from './Node';
import FolderComponent from './FolderComponent'; //Passed to Node Component
import FileComponent from './FileComponent';
import styles from './Tree.css';
class Tree extends Component {


  static propTypes={
    data: React.PropTypes.object.isRequired,
    fileComponent: React.PropTypes.func,
    folderComponent: React.PropTypes.func,
  };


  static defaultProps = {
    folderComponent: FolderComponent,
    fileComponent: FileComponent
  };

  constructor(props) {
    super(props);
    this.state = {
      data: parse(props.data)
    };
   
  }


  //receiving props from App component
componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data)
      this.setState({data: parse(nextProps.data)});
   }


render(){
    return(
       <div>
        <div className={styles.folderTree}>
          <Node
            path={[]}
            level={0}
            id={this.state.data.id}
            key={this.state.data.id}
            open={this.state.data.open}
            filename={this.state.data.filename}
            children={this.state.data.children || []}  //Data is passed to the Node component
            fileComponent={this.props.fileComponent}
            folderComponent={this.props.folderComponent}
          />
        </div>
      </div>
    )
  }
}


//Parse json data recursively
function parse(data){
  if (data.children) {
    for (let i = 0; i < data.children.length; i++)
      data.children[i] = parse(data.children[i]);
  }
  return data;
}

export default Tree;
