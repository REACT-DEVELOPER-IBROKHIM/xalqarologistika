import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '@store'
import { BrowserRouter } from 'react-router-dom'
import { MainLoading } from '@utils/Utils'
import '@services/lang'
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<MainLoading />}>
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>
)
