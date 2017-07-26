import React from 'react';
import styles from './Tree.css'


 //THIS component is not being used now.
class EditableName extends React.Component {
	static propTypes = {
	 
	};

	constructor(props) {
    super(props);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);

    this.state = {
    	editing: false,
    	selected: false,
    };
  }

  componentWillReceiveProps(nextProps) {
  	
  }

  toggleEditing() {
  	
  }

  handleChangeName() {
  	this.props.setMyName(this.textInput.value);
  	this.toggleEditing();
  }

	render() { 
		}

}


export default EditableName; 