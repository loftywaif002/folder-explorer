import React, { Component } from 'react';
import Tree from './components/Tree';

const testData = {
  "id": 1,
  "filename": "All Categories",
  "children": [
    {
      "id": 2,
      "filename": "Main Folder",
      "children": [
        {
          "id": 3,
          "filename": "Nested Folder",
          "children": [
            {
              "id": 4,
              "filename": "Super Nested Folder",
              "children": [
                {
                  "id": 5,
                  "filename": "Deep File",
                },
                {
                  "id": 6,
                  "filename": "Deep File 2",
                },
                {
                  "id": 7,
                  "filename": "empty",
                }
              ]
            }
          ]
        },
      ]
    },
    {
      "id": 18,
      "filename": "Folder Two",
      "children": [
        {
          "id": 19,
          "filename": "empty1",
        },
        {
          "id": 20,
          "filename": "empty2",
        },
        {
          "id": 21,
          "filename": "empty3",
        }
      ]
    },
    {
      "id": 22,
      "filename": "Folder Three",
      "children": [
        {
          "id": 23,
          "filename": "empty1",
        },
        {
          "id": 24,
          "filename": "empty2",
        }
      ]
    },
    {
      "id": 25,
      "filename": "Private Folder",
      "children": [
        {
          "id": 26,
          "filename": "empty1",
        },
        {
          "id": 27,
          "filename": "empty2",
        }
      ]
    }
  ]
}


class App extends Component {

 constructor(props) {
  super(props);
  this.state = {
     data: 1,
     testData: testData
  };
}

  render() {
    return (
      <div>
        <Tree data={this.state.testData}/>
      </div>
    );
  }
}

export default App;
