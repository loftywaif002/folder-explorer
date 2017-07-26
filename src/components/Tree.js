import React, { Component } from 'react';
import Node from './Node';


class Tree extends Component {


  static propTypes={
    data: React.PropTypes.object.isRequired
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
         <Node />
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
