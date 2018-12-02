import _ from 'lodash'
import {
    LOGIN,
    LOGOUT,
    READ_USER,
    UPDATE_USER,
    READ_ALL_ESTIMATE,
} from '../actions/actionType'

export default (events = {}, action = null) => {
    switch (action.type) {
        case READ_USER:
            return action.result.data.show;

        case READ_ALL_ESTIMATE:
            return _.mapKeys(action.result.data.estimations.edges, 'node.id');

        case LOGIN:
        case LOGOUT:
        case UPDATE_USER:
        default:
            return events
    }
}