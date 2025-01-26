import './App.scss'
import Routes from '@routes'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
    return (
        <div className="App">
            <Routes />
            <SpeedInsights />
        </div>
    )
}

export default App
