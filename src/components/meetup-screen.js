import React from 'react';
import { Entity } from 'aframe-react';

export default class MeetupScreen extends React.Component {

    render() {
        return <Entity id="meetup-canvas" primitive="a-plane" position="0 3 -4" rotation="0 0 0" height="3" width="4"
                       htmltexture="asset: #meetuppage">
        </Entity>
    }

}
