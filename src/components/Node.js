import React, { Component } from 'react';

class Node extends Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    level: React.PropTypes.number.isRequired,
    children: React.PropTypes.array.isRequired,   
    filename: React.PropTypes.string.isRequired,  
    fileComponent: React.PropTypes.func.isRequired,
    folderComponent: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.toggleFolder = this.toggleFolder.bind(this);
    this.state = {
      level: props.level,
      open: props.open === undefined ? true : props.open,
      children: this.props.children,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.state.children)
      this.setState({children: nextProps.children});
  }

  toggleFolder() {
      this.setState(prevState => ({ open: !prevState.open }));
  }

  
  render() {
    const { fileComponent: FileComponent, folderComponent: FolderComponent } = this.props;

    if (this.state.children.length > 0) {
      return (
        <div>
          <FolderComponent
            open={this.state.open}
            filename={this.props.filename}
            toggleFolder={this.toggleFolder}
          />

          <ul style={{ margin: 0 }}>
            {this.state.open &&
              this.state.children.map( (child, index) => {
                return (
                  <Node
                    id={child.id}
                    key={child.id}            
                    filename={child.filename}
                    open={child.open}
                    level={this.state.level + 1}
                    children={child.children? child.children : []}
                    fileComponent={FileComponent}
                    folderComponent={FolderComponent}
                  />
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return (
        <FileComponent
          level={this.state.level}          
          filename={this.props.filename}
        />
      )
    }
  }

}

export default Node;
