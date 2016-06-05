import axios from 'axios'

export const RETRIEVE_FEED = 'RETRIEVE_FEED'
export function retrieveFeed() {
    return {
        type: RETRIEVE_FEED
    }
}

export const FETCH_FEED = 'FETCH_FEED'
export function fetchFeed(instagramHandle) {
    return dispatch => {}
}

