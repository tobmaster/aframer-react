import AFRAME from 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import drawComponent from 'aframe-draw-component';
AFRAME.registerComponent("draw", drawComponent.component);

import 'aframe-htmltexture-component';

import MeetupScreen from './components/meetup-screen';

import {Map} from './map';
import DetailView from './detailView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};

  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img crossOrigin="anonymous" alt="" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img crossOrigin="anonymous" alt="" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
            <div id="meetuppage">
                <h1 color="#00ff00">Friends!</h1>
            </div>
        </a-assets>

          
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        <DetailView />
        <Map />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
