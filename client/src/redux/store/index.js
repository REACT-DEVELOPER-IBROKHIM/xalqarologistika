import { createStore } from 'redux'
import rootReducers from '../reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['login'],
}

const presistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(
    presistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const persistor = persistStore(store)
export { persistor, store }
