import { FETCH_FEED } from './actions'

export function reducer(state = {
    feed: {
        handle: '',
        isFetching: false
    }
}, action) {
    switch(action.type) {
        case FETCH_FEED:
            return state // FIXME
        default:
            return state
    }
}
