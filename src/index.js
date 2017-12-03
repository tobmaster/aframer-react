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

import Map from './map';
import Environment from './environment';
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
              <img id="groundTexture" src="https://ucarecdn.com/d4cf04b0-95e0-4b03-a005-f96040b1ad2f/"/>
              <img id="skyTexture" src="https://ucarecdn.com/7e11b7c7-0e1d-4720-88c9-ea40ef4f3be0/"/>
              <div id="meetuppage">
                  <h1 color="#00ff00">Friends!</h1>
              </div>
        </a-assets>

        <Environment />
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
