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
import MeetupDetails from './components/meetup-details';
import Map from './map';
import Environment from './environment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};

  }

  render () {
      const meetupEntity =  {
          "name": "Berlin.js",
          "location": "co.up",
          "coordinates": {
              "latitude": "52.500330",
              "longitude": "13.419786"
          },
          "description": "This is some description",
          "time": "19:00",
          "day": "Every 3rd Thursday",
          "nextMeetup": "2017-11-13T21:41:21.952Z",
          "twitter": "berlinjs",
          "id": "9ea4cdb8-e18b-44c2-9b58-252395d7d5cd",
          "url": "https://www.meetup.com/Berlin-JS/"
      };

    return (
      <Scene>
          <a-assets>
              <img id="groundTexture" src="https://ucarecdn.com/d4cf04b0-95e0-4b03-a005-f96040b1ad2f/"/>
              <img id="skyTexture" src="https://ucarecdn.com/7e11b7c7-0e1d-4720-88c9-ea40ef4f3be0/"/>
        </a-assets>

          <MeetupDetails meetup={meetupEntity} />
          <MeetupScreen/>
        <Environment />
        <Map />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
