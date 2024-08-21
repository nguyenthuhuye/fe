import { all } from 'redux-saga/effects'
import itemSaga from './item.saga'

export default function* rootSaga() {
    yield all([
        ...itemSaga
    ])
}