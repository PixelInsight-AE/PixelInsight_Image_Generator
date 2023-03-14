// TODO: import all necessary things, including browser router, route, and link
// ? https://reactrouter.com/en/main
// ? https://reactrouter.com/web/api/BrowserRouter

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'



function App() {
  const [count, setCount] = useState(0)

  return (

    // TODO: add main JSX inside of <BrowserRouter> and <Route> tags
    // ? https://reactrouter.com/web/api/Route
    // ? https://reactrouter.com/web/api/Route/route-render-methods
    // ? https://reactrouter.com/web/api/Route/route-props
    // ? https://reactrouter.com/web/api/Link
    // ? https://reactrouter.com/web/api/Link/to-object
    <>

    {/* header */}
    <header className="App-header">
      <h1>PixelInsight Image Generator</h1>
      <div id="prompt-wrapper">
        <input placeholder='Enter Prompt Here' type="text" />
        <button>Create!</button>
      </div>
    </header>

    {/* main */}
    <main>
      <h2>See what others created!</h2>
      <div id="example-image-wrapper">
        <img src={reactLogo} alt="React Logo" />
      </div>
    </main>

    {/* footer */}
    <footer>
      <p>© 2023 Pixel Insight</p>
    </footer>
    
    </>
  )
}
// TODO: Make sure image resolution for home page images is semi-small to help with load times and cost's
export default App
