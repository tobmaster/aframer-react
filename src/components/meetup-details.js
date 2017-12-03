import React from 'react';

export default class MeetupDetails extends React.Component {

    render() {
        const {meetup} = this.props;
        console.log(this.props);
        return <a-assets>
            <div id="meetuppage">
                <h1>{meetup.name}</h1>
                <p>
                    {meetup.description}
                </p>
                <ul>
                    <li>Location: {meetup.location}</li>
                    <li>Day: {meetup.day}</li>
                    <li>Time: {meetup.time}</li>
                    <li>twitter: <a href="https://twitter.com/{meetup.twitter}">@{meetup.twitter}</a></li>
                    <li>url: <a href={meetup.url}>{meetup.url}</a></li>
                </ul>
            </div>
        </a-assets>;
    }

}

