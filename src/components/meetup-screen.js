import React from 'react';
import { Entity } from 'aframe-react';

export default class MeetupScreen extends React.Component {

    render() {
        return <Entity id="meetup-canvas" primitive="a-plane" position="0 2.5 -3" rotation="0 0 0" height="2" width="3"
                       draw="width: 512; height: 341;"
                       htmltexture="asset: #meetuppage">
        </Entity>
    }

}
