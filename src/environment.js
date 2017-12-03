import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

export default class Environment extends React.Component {

  render () {
    return (
      <Entity>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
      </Entity>
    );
  }
}
