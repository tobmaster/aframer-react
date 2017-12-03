import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Entity
        id="map"
        position="0.076 2.177 -5.531"
        scale="5 3 0.01"
        geometry="primitive:box"
        material="color:#cdff19"
      />
      );
  }
}
