import React, { Component } from 'react'
import { Feed } from './Feed'
import { GeoMap } from './GeoMap'

export class App extends Component {
    render() {
        const { fetchFeed } = this.props

        return (
            <div className="instamaps-app">
                <Feed fetchFeed={ fetchFeed }/>
                <GeoMap />
            </div>
        )
    }
}
