import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import itemCollectionReducer from './itemReducer/item.collection.reducer'
import itemInstanceReducer from './itemReducer/item.instance.reducer'

export default combineReducers({
    auth: authReducer,
    itemCollection: itemCollectionReducer,
    itemInstance: itemInstanceReducer
})