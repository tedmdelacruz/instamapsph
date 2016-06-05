import { connect } from 'react-redux'
import { fetchFeed } from './actions'
import * as components from './components/App'

export const App = connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispachToProps(dispatch) {
        return {
            fetchFeed: (instagramHandle) => dispatch(fetchFeed(instagramHandle))
        }
    }
)(components.App)
