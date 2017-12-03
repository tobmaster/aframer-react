import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Map extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Entity id="map"
        position="0 1 -3"
        rotation="90 180 0"
        scale="1 1 0"
        geometry="width:3;height:3"
        material="src:https://ucarecdn.com/e242c53a-8be1-43d9-b906-a5066d832873/" />
    );
  }
}
