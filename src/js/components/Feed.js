import React, { Component } from 'react'

export class Feed extends Component {

    render() {
        const { fetchFeed } = this.props
        let instagramHandle = ''

        function handleUsernameChange(event) {
            instagramHandle = event.target.value
        }

        function handleFeedFetch() {
            fetchFeed(instagramHandle)
        }

        return (
            <div className="instamaps-feed">
                <input type="text" placeholder="Instagram username"
                    onChange={ handleUsernameChange } defaultValue=""/>
                <button onClick={ handleFeedFetch }>Fetch</button>
            </div>
        ) 
    }
}
